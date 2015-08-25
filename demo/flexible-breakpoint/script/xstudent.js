var validateInput = function(QQ, Qnum) {
  var filter = /^\s*[.0-9]{5,11}\s*$/;
  var Qnumfilter = /^[0-9]*[1-9][0-9]*$/;
  var availableQCoin = $('#availableQCoin').html();
  if (Qnum == '') {
    alert('请输入兑换Q币数量！');
    return false;
  } else if (QQ == '') {
    alert('请输入兑换的QQ号码！');
    return false;
  } else if (!Qnumfilter.test(Qnum)) {
    alert('兑换的Q币数量只能是整数！');
    return false;
  } else if (Qnum > parseInt(availableQCoin)) {
    alert('抱歉，您只能兑换 ' + availableQCoin + ' Q币');
    return false;
  } else if (!filter.test(QQ)) {
    alert('请输入5-11位QQ号码！');
    return false;
  } else {
    if (confirm('您输入的QQ账户为:' + QQ)) {
      return true;
    } else {
      return false;
    }
  }
}
$(function($) {
  $('#exchangeSub').click(function() {
    var qq = $('#QQ').val();
    var q_quantity = $('#Qnum').val();
    var result = validateInput(qq, q_quantity);
    if (result) {
      $.ajax({
        url: '/promotion/j/confirm_exchange_ucoin',
        type: 'POST',
        dataType: 'json',
        data: {
          qq: qq,
          qcoin_quantity: q_quantity
        },
        success: function(data) {
          if (data.status === 0) {
            if (/android/i.test(navigator.userAgent)) {
              UdaNative.execute("update_ucoin", null);
            } else if (/iPhone|iPad|iPod|iTouch|mac/i.test(navigator.userAgent)) {
              convertUCoinSuccess();
            }
            location.reload();
          } else {
            alert(data.detail);
          }
        }
      });
    }
  });
});
