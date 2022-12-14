import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
    position: 'relative',
    paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
    zIndex: 9,
    width: 32,
    height: 32,
    position: 'absolute',
    left: theme.spacing(3),
    bottom: theme.spacing(-2),
}));

const InfoStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------

PTCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
};

export default function PTCard({ post, index }) {
    const { cover, title, view, comment, share, author, createdAt } = post;
    // const latestPostLarge = index === 0;

    const POST_INFO = [
        { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        // { number: share, icon: 'eva:share-fill' },
    ];

    return (
        // <Grid item xs={12} sm={6} md={3}>
        <Card
            sx={{
                position: 'relative',
                marginTop: '20px',
                // width: '2px',
            }}
        >
            <CardMediaStyle
                sx={{
                    // ...((latestPostLarge) && {
                    //     pt: 'calc(100% * 4 / 3)',
                    //     '&:after': {
                    //         top: 0,
                    //         content: "''",
                    //         width: '100%',
                    //         // height: '100%',
                    //         position: 'absolute',
                    //         bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    //     },
                    // }),
                    // ...(latestPostLarge && {
                    pt: {
                        xs: 'calc(100% * 1)',
                        // sm: 'calc(100% * 1 / 2)',
                    },
                    // }),
                }}
            >
                {/* <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          /> */}
                {/* <AvatarStyle
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          /> */}

                <CoverImgStyle alt={title} src={author.avatarUrl} />
            </CardMediaStyle>

            <CardContent
                sx={{
                    pt: 4,
                    // ...((latestPostLarge) && {
                    //     bottom: 0,
                    //     width: '100%',
                    //     position: 'absolute',
                    // }),
                }}
            >
                <TitleStyle
                    to="/ptdetails"
                    color="inherit"
                    variant="h6"
                    underline="hover"
                    component={RouterLink}
                    // sx={{
                    //     ...(latestPostLarge && { typography: 'h5', height: 60 }),
                    //     ...((latestPostLarge) && {
                    //         color: 'common.white',
                    //     }),
                    // }}
                >
                    {title}
                </TitleStyle>
                <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: 'text.disabled', display: 'block' }}
                >
                    {'Gym | Yoga'}
                </Typography>
                <InfoStyle>
                    {POST_INFO.map((info, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                ml: index === 0 ? 0 : 1.5,
                                // ...((latestPostLarge) && {
                                //     color: 'grey.500',
                                // }),
                            }}
                        >
                            <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                            <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
                        </Box>
                    ))}
                </InfoStyle>
            </CardContent>
        </Card>
        // </Grid>
    );
}
