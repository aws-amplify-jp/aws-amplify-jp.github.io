import * as React from "react";
import { Link } from "gatsby";
import Default from "../containers/Default";
import { Typography, Box, Button } from "@mui/material";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NotFoundPage = () => {
  return (
    <Default>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8
        }}
      >
        <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h1" component="h1" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、ページが削除された可能性があります。
        </Typography>
        
        {process.env.NODE_ENV === "development" && (
          <Box sx={{ mb: 4, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="body2" component="code" sx={{ fontFamily: 'monospace' }}>
              Try creating a page in src/pages/.
            </Typography>
          </Box>
        )}

        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          color="primary"
          size="large"
        >
          トップページへ戻る
        </Button>
      </Box>
    </Default>
  );
};

export const Head = () => (
  <>
    <html lang="ja" />
    <title>ページが見つかりません | AWS Amplify Japan User Group</title>
  </>
);

export default NotFoundPage;