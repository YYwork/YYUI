$ ->
  $('.nav-item').on 'click', (e)->
    $(".nav-items").hide()
    $(this).find('.nav-items').show()

    ev = e || window.event
    if ev.stopPropagation
        ev.stopPropagation()
    else if window.event
        window.event.cancelBubble = true  #IE

  document.onclick = ()->
    $(".nav-items").hide()
