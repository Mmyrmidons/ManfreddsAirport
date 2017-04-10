<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="ISO-8859-1"/>

<xsl:template match="*|/">
	<xsl:apply-templates select="TEI.2/text/body/p | TEI.2/text/body/div1/lg/p"/>
</xsl:template>

<xsl:template match="text()|@*"><xsl:value-of select="."/></xsl:template>

<xsl:template match="TEI.2/text/body/p | TEI.2/text/body/div1/lg/p">
	<div id="{substring-after(@id, '.')}" class="persephone" onmouseover="sumer.lightPink(this, '{@id}');" onmouseout="sumer.mistyRose(this, '{@id}');">
		<span class="beatrix"><xsl:value-of select="@n"/></span>
		<xsl:text> - </xsl:text>
		<xsl:apply-templates select="text() | w | q | gap"/>
	</div>
</xsl:template>

<xsl:template match="gap">
	<xsl:text> ... </xsl:text>
</xsl:template>

<xsl:template match="q">
	<xsl:text>'</xsl:text>
	<xsl:apply-templates select="text() | w"/>
	<xsl:text>'</xsl:text>
</xsl:template>

<xsl:template match="w">
	<em class="{@type}"><xsl:value-of select="text()"/></em>
</xsl:template>

</xsl:stylesheet><!-- Stylus Studio meta-information - (c)1998-2003. Sonic Software Corporation. All rights reserved.
<metaInformation>
<scenarios ><scenario default="yes" name="Scenario1" userelativepaths="yes" externalpreview="no" url="..\translations\t.1.1.1.xml" htmlbaseurl="" outputurl="" processortype="internal" profilemode="0" urlprofilexml="" commandline="" additionalpath="" additionalclasspath="" postprocessortype="none" postprocesscommandline="" postprocessadditionalpath="" postprocessgeneratedext=""/></scenarios><MapperInfo srcSchemaPathIsRelative="yes" srcSchemaInterpretAsXML="no" destSchemaPath="" destSchemaRoot="" destSchemaPathIsRelative="yes" destSchemaInterpretAsXML="no"/>
</metaInformation>
-->