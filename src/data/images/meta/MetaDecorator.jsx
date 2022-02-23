const MetaDecorator = ({title, description, imageUrl, imageAlt}) => {
    return (
        <Helmet>
            <title>{title}</title>
<meta property="og:title" content={description}>
<meta property="og:type" content="article" />
<meta property="og:image" content="">
<meta property="og:url" content="">
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
    imageRul: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,

};
export default MetaDecorator;
