import { Container, Grid, Text, Flex, ActionIcon, Image, Box, Input } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react'
import verifiedIcon from '../../assets/logos/verifiedIcon.svg';
import { otpPageStyle } from './style';

let currentOTPIndex: number = 0;
 
const PaymentOtpVerification = () => {
    const { classes } = otpPageStyle();
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        const newOTP: string[] = [...otp];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);
        if (!value) setActiveOTPIndex(currentOTPIndex - 1);
        else setActiveOTPIndex(currentOTPIndex + 1);

        setOtp(newOTP)
    }

    const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOTPIndex = index
        if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);        
    }
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex])

    return (
      <>
        <Container>
          <Grid>
            <Grid.Col span={2}>
              <Text fz="16px" fw={500} color="#FFFFFF">
                PHONE VERIFICATION
              </Text>
            </Grid.Col>
          </Grid>

          <Flex direction="column" align="center" pt={25} pr={"15px"}>
            <ActionIcon size={80} className={classes.iconCard}>
              <Image width="auto" height="auto" src={verifiedIcon} />
            </ActionIcon>
          </Flex>

          <Text align="center" pt={"30px"} fw={400} size="12px" color="#000000">
            Verification code has been sent by SMS to
          </Text>
          <Text align="center" fw={500} pt={"20px"} size="20px" color="black">
            +1(675) 435-7575
          </Text>

          <Box className={classes.boxStyle}>
            <Text size="11px" color="red" pb={"5px"}>
              Enter OTP
            </Text>
            <Flex gap={15}>
              {otp.map((_data: any, index: number) => {
                return (
                  <Flex key={index} direction="column" w="20%" align="left">
                    <Input
                      ref={index === activeOTPIndex ? inputRef : null}
                      className={classes.otpInput}
                      size="xl"
                      onChange={handleOnChange}
                      value={otp[index]}
                      onKeyDown={(e) => handleOnKeyDown(e, index)}
                    />
                    {index === otp.length - 1 ? null : (
                      <span style={{ background: "red", fontWeight: "500" }} />
                    )}
                  </Flex>
                );
              })}
              {/* <Flex direction="column" w="20%" align="left">
                <Input
                  className={classes.otpInput}
                  size="xl"
                />
              </Flex>
              <Flex direction="column" w="20%" align="left">
                <Input
                  className={classes.otpInput}
                  size="xl"
                />
              </Flex>
              <Flex direction="column" w="20%" align="left">
                <Input
                  className={classes.otpInput}
                  size="xl"
                />
              </Flex> */}
            </Flex>
          </Box>
        </Container>
      </>
    );
}

export default PaymentOtpVerification