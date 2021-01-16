$(document).ready(function() {
  let comparisonCounter = 0

  $('.comp_oper').on('click', function() {
    const key = $('#key').val()
    const oper = $(this).attr('oper')
    const value = $('#value').val()

    const jqFormRelation = $('#relation')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('id', `cb${comparisonCounter}`)
    checkbox.setAttribute('type', 'checkbox')
    jqFormRelation.append(checkbox)

    const input = document.createElement('input')
    input.setAttribute('id', `ip${comparisonCounter}`)
    input.setAttribute('type', 'text')
    input.setAttribute('style', 'width: 95%;')
    input.value = `\`${key}\` ${oper} \`${value}\``
    jqFormRelation.append(input)

    jqFormRelation.append(document.createElement('br'))

    comparisonCounter++
  })

  $('.rel_oper').on('click', function() {
    const selected = []
    $('#relation input:checked').each(function() {
      const id = $(this).attr('id')
      const counter = id.substr(2)
      selected.push($(`#ip${counter}`).val());
    })
    const jqResult = $('#result')
    const result = jqResult.val()
    switch ($(this).attr('oper')) {
      case '&': {
        jqResult.val(`(${result} & ${selected[0]})`)
        break
      }
      case '|': {
        jqResult.val(`(${result} | ${selected[0]})`)
        break
      }
      case '!': {
        jqResult.val(`(! ${result})`)
        break
      }
      case '?': {
        jqResult.val(`${selected[0]}`)
      }
    }
  })
})
