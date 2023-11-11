import { InputHTMLAttributes, useRef } from 'react'
import Text from 'components/Common/Text'
import * as Style from './styles'
import Button from 'components/Common/Button'

export type InputFileProps = {
  error?: string
  fileName: string | undefined
  handleFileChange?: (e) => void
  validation?: any
} & InputHTMLAttributes<HTMLInputElement>

function InputFile({
  error,
  fileName,
  handleFileChange,
  id,
  name,
  placeholder,
  validation
}: InputFileProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleClick = (e) => {
    if (inputFileRef.current) inputFileRef.current.click()
    e.preventDefault()
  }

  const handleKeyUp = (e) => {
    if (e.code === 'Enter' || e.code === 'Space')
      if (inputFileRef.current) inputFileRef.current.click()
    e.preventDefault()
  }

  return (
    <Style.InputFileWrapper>
      <Style.Content>
        <Style.InputFile
          name={name}
          id={id}
          onChange={(e) => {
            if (handleFileChange) {
              handleFileChange(e)
            }
            validation.onChange(e)
          }}
          ref={(e) => {
            validation?.ref(e)
            inputFileRef.current = e
          }}
        />

        <Style.CustomInput fileName={fileName}>
          <Style.Box
            onKeyUp={handleKeyUp}
            onClick={handleClick}
            id="upload-box"
          >
            {!fileName ? (
              <div>
                <Text fontSize="2.4rem" color="black2" fontWeight="400">
                  {placeholder}
                </Text>
                <Text fontSize="1.6rem" color="gray5">
                  .PDF: max file size: 1Mb{' '}
                </Text>
              </div>
            ) : (
              fileName
            )}
          </Style.Box>

          <Button
            onKeyUp={handleKeyUp}
            onClick={handleClick}
            id="upload-button"
            variant="isSecondaryHover"
            size="large"
            sizeMobile="medium"
            label="Upload"
          />
        </Style.CustomInput>
      </Style.Content>
      {error && <Style.Error>{error}</Style.Error>}
    </Style.InputFileWrapper>
  )
}

export default InputFile
