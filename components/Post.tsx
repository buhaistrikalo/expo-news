import { FC } from 'react';
import styled from 'styled-components/native';

const PostView = styled.View`
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: grey;
`;

const PostImage = styled.Image`
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-width: 1px;
    border-radius: 10px;
`;

const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`;

const PostTitle = styled.Text`
    font-weight: 700;
    font-size: 16px;
`;

const PostData = styled.Text`
    color: grey;
`;

interface PostProps {
    title: string;
    imageUrl?: string;
    createdAt: string;
}

const Post: FC<PostProps> = ({ title, imageUrl, createdAt }) => {
    return (
        <PostView>
            <PostImage
                source={{
                    uri: imageUrl,
                }}
            />
            <PostDetails>
                <PostTitle >{title}</PostTitle>
                <PostData>{createdAt}</PostData>
            </PostDetails>
        </PostView>
    );
};

export default Post;
