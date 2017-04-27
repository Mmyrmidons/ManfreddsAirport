<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

0<xsl:output method="html" encoding="ISO-8859-1"/>

<xsl:template match="*|/">
	<table id="glossaryTable">
		<xsl:apply-templates select="TEI.2/text/body/l/w"/>
	</table>
</xsl:template>

<xsl:template match="text()|@*"><xsl:value-of select="."/></xsl:template>

<xsl:template match="TEI.2/text/body/l/w">
	<xsl:variable name="lemma">
		<xsl:call-template name="tikkysOutput">
			<xsl:with-param name="sign">
				<xsl:value-of select="@lemma"/>
			</xsl:with-param>
		</xsl:call-template>
	</xsl:variable>
	
	<tr>
		<td valign="top" class="dicLemma"><xsl:value-of select="$lemma"/></td>
		<td valign="top" class="dicPos">
			<xsl:if test="@pos = 'AJ'">
				adj
			</xsl:if>
			<xsl:if test="@pos = 'AV'">
				adv
			</xsl:if>
			<xsl:if test="@pos = 'C'">
				conj
			</xsl:if>
			<xsl:if test="@pos = 'I'">
				interj
			</xsl:if>
			<xsl:if test="@pos = 'N'">
				noun
			</xsl:if>
			<xsl:if test="@pos = 'NEG'">
				negator
			</xsl:if>
			<xsl:if test="@pos = 'NU'">
				numeral
			</xsl:if>
			<xsl:if test="@pos = 'PD'">
				pronoun
			</xsl:if>
			<xsl:if test="@pos = 'V'">
				verb
			</xsl:if>
		</td>
		<td valign="top" class="dicLabel"><xsl:value-of select="@label"/></td>
	</tr>
</xsl:template>

<xsl:include href="tikkysOutput.xsl"/>

</xsl:stylesheet>