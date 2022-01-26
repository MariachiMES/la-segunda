const MetaDecorator = ({title, description}) => {
    return (
        <Helmet>
            <title></title>
<meta property="og:title" content="European Travel Destinations">
<meta property="og:type" content="article" />
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
<meta name="twitter:card" content="summary_large_image"></meta>
<!--  Non-Essential, But Recommended -->
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:site_name" content="European Travel, Inc.">
<meta name="twitter:image:alt" content="Alt text for image"></meta>
        </Helmet>
    )
}
MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default MetaDecorator;
