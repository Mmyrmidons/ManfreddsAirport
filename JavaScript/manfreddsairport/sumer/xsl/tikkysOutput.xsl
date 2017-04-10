<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="ISO-8859-1"/>

<xsl:template name="tikkysOutput">
	<xsl:param name="sign"/>
	<xsl:if test="not(contains($sign, '2')) and not(contains($sign, '3'))">
		<xsl:value-of select="$sign"/>
	</xsl:if>
	<xsl:if test="contains($sign, '2')">
		<xsl:value-of select="translate($sign, 'aeiu2', '&#225;&#233;&#237;&#250;')"/>
	</xsl:if>
	<xsl:if test="contains($sign, '3')">
		<xsl:value-of select="translate($sign, 'aeiu3', '&#224;&#232;&#236;&#249;')"/>
	</xsl:if>
</xsl:template>

</xsl:stylesheet>