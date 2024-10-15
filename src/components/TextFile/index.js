import {Component} from 'react'
import {
  DivContainer,
  InnerCointainer,
  Heading,
  InputCointainer,
  TextInput,
  TextButton,
  Paragraph,
} from './styledComponents'

class TextFile extends Component {
  state = {isEdit: true, textValue: ''}

  gettingText = e => {
    this.setState({
      textValue: e.target.value,
    })
  }

  changeEdit = () => {
    this.setState(preValue => ({
      isEdit: !preValue.isEdit,
    }))
  }

  render() {
    const {isEdit, textValue} = this.state
    return (
      <DivContainer className="text-file-bg-color">
        <InnerCointainer>
          <Heading>Editable Text Input</Heading>
          {isEdit ? (
            <InputCointainer>
              <TextInput onChange={this.gettingText} value={textValue} />
              <TextButton type="button" onClick={this.changeEdit}>
                Save
              </TextButton>
            </InputCointainer>
          ) : (
            <InputCointainer>
              <Paragraph>{textValue}</Paragraph>
              <TextButton type="button" onClick={this.changeEdit}>
                Edit
              </TextButton>
            </InputCointainer>
          )}
        </InnerCointainer>
      </DivContainer>
    )
  }
}

export default TextFile
