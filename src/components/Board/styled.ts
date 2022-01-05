import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 50px;
`;
export const Left = styled.View`
  width: ${props => props.theme.screen_size.width * 0.55}px;
`;
export const LeftBoard = styled.View`
  background-color: ${props => props.theme.colors.boardLightGray};
  height: ${props => props.theme.screen_size.width * 0.3}px;
  border-color: ${props => props.theme.colors.black};
  border-width: ${props => props.theme.spacing[0.5] / 4}px;
  border-radius: ${props => props.theme.border_radius.small}px;
  margin-left: ${props => props.theme.spacing[4]}px;
  margin-right: ${props => props.theme.spacing[4]}px;
  margin-top: ${props => props.theme.spacing[4] * 2}px;
`;
export const Right = styled.View`
  width: ${props => props.theme.screen_size.width * 0.45}px;
  
`;
export const RightUser = styled.View`
  margin-left: ${props => props.theme.spacing[4]}px;
  margin-right: ${props => props.theme.spacing[4]}px;
  align-items: center;
  margin-top: ${props => props.theme.spacing[2.5]}px;
  height:125px;
  
`;
export const TeacherImage = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: ${props => props.theme.screen_size.width * 0.45 - 64}px;
  height: ${props =>
    ((props.theme.screen_size.width * 0.45 - 64) * 1075) / 1911}px;
  border-radius: ${props => props.theme.border_radius.large}px;
`;
export const RightRow2 = styled.View`
  margin-left: ${props => props.theme.spacing[2]}px;
  margin-right: ${props => props.theme.spacing[2]}px;
  border-radius: ${props => props.theme.border_radius.large}px;
  flex-direction: row;
  align-items: flex-start;
`;
