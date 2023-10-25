const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractb7BdMkA = await MolScribe.new({from: accounts[3]});
		const _molBankpmNFfP = accounts[0]
		const tokenIdv4J1Wb9 = BigInt("1958")
		const tokenAddressLB5cDwj = accounts[0]
		await contractb7BdMkA.updateMolBank.call(_molBankpmNFfP, {from: accounts[3]});
		const nullP3988xt = await contractb7BdMkA.getTokenKey.call(tokenAddressLB5cDwj, tokenIdv4J1Wb9, {from: accounts[3]});

		await expect(contractb7BdMkA.updateMolBank.call(_molBankpmNFfP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractZGWA4jS = await MolScribe.new({from: accounts[1]});
		const tokenIdBy6uZW = BigInt("1806")
		const tokenAddresssrRKT3t = accounts[4]
		const transactionValueV2StEYQ = BigInt("510")
		const buyerJIEJ9tk = accounts[2]
		const tokenIdOzQ8TAZ = BigInt("52")
		const tokenAddressCdRvXDs = accounts[5]
		const startingRoyaltieskwEGz5s = BigInt("222")
		const communityAddresskAnGSZd = accounts[1]
		const tokenIdRwPpxEw = BigInt("434")
		const tokenAddressyu9MMNx = "0x0000000000000000000000000000000000000001"
		const transactionValueDTMWZkJ = BigInt("680")
		const buyerth3BZH = accounts[4]
		const tokenIdUvEbqoM = BigInt("1759")
		const tokenAddressgIjI4MA = accounts[2]
		const nullFBWTqFa = await contractZGWA4jS.getTokenKey.call(tokenAddresssrRKT3t, tokenIdBy6uZW, {from: accounts[4]});
		await contractZGWA4jS.makeOffer.call(tokenAddressCdRvXDs, tokenIdOzQ8TAZ, buyerJIEJ9tk, transactionValueV2StEYQ, {from: accounts[4]});
		await contractZGWA4jS.scribeNFT.call(tokenAddressyu9MMNx, tokenIdRwPpxEw, communityAddresskAnGSZd, startingRoyaltieskwEGz5s, {from: accounts[0]});
		await contractZGWA4jS.makeOffer.call(tokenAddressgIjI4MA, tokenIdUvEbqoM, buyerth3BZH, transactionValueDTMWZkJ, {from: accounts[3]});

		assert.equal(nullFBWTqFa, 0xd9c058f6b8db310e77f7c666a03123a247678da1000000000000000000000000000000000000000000000000000000000000070e)
		await expect(contractZGWA4jS.makeOffer.call(tokenAddressCdRvXDs, tokenIdOzQ8TAZ, buyerJIEJ9tk, transactionValueV2StEYQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract3xZD1s = await MolScribe.new({from: accounts[2]});
		const startingRoyaltiesTbhzCOj = BigInt("195")
		const communityAddressx7A8Jf = accounts[2]
		const tokenIdsnfUlyQ = BigInt("1931")
		const tokenAddressnBgEJfJ = "0x0000000000000000000000000000000000000001"
		const communityAddresstazWbD = accounts[3]
		const tokenIdGklQ3Ul = BigInt("1024")
		const tokenAddressT0WOh13 = accounts[2]
		const tokenIdhrFstNm = BigInt("488")
		const tokenAddressJ70aIY0 = accounts[2]
		await contract3xZD1s.scribeNFT.call(tokenAddressnBgEJfJ, tokenIdsnfUlyQ, communityAddressx7A8Jf, startingRoyaltiesTbhzCOj, {from: accounts[1]});
		await contract3xZD1s.giftLexART.call(tokenAddressT0WOh13, tokenIdGklQ3Ul, communityAddresstazWbD, {from: accounts[0]});
		const nulltWDxafu = await contract3xZD1s.getTokenKey.call(tokenAddressJ70aIY0, tokenIdhrFstNm, {from: accounts[4]});

		await expect(contract3xZD1s.scribeNFT.call(tokenAddressnBgEJfJ, tokenIdsnfUlyQ, communityAddressx7A8Jf, startingRoyaltiesTbhzCOj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractVSl7rQa = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molFeeNun7TX8 = BigInt("1571")
		const _molBankExoWA2I = accounts[0]
		const tokenIdQpsBPCy = BigInt("1640")
		const tokenAddressWPFzhep = accounts[2]
		const tokenIdv0y0CSE = BigInt("1517")
		const tokenAddressSzNYveO = accounts[4]
		const tokenIdtdhmtes = BigInt("2038")
		const tokenAddressPVJF4S = "0x0000000000000000000000000000000000000001"
		const _molFeeIEoqLlG = BigInt("1567")
		await contractVSl7rQa.updateMolFees.call(_molFeeNun7TX8, {from: accounts[3]});
		await contractVSl7rQa.updateMolBank.call(_molBankExoWA2I, {from: accounts[3]});
		await contractVSl7rQa.acceptOffer.call(tokenAddressWPFzhep, tokenIdQpsBPCy, {from: accounts[0]});
		const nullEagAAX = await contractVSl7rQa.getTokenKey.call(tokenAddressSzNYveO, tokenIdv0y0CSE, {from: accounts[1]});
		await contractVSl7rQa.acceptOffer.call(tokenAddressPVJF4S, tokenIdtdhmtes, {from: accounts[4]});
		await contractVSl7rQa.updateMolFees.call(_molFeeIEoqLlG, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contract76B9BJ = await MolScribe.new({from: accounts[1]});
		const tokenIdxtGOBDU = BigInt("2028")
		const tokenAddresslWP6BR = accounts[2]
		const communityAddress8tmnJP = accounts[2]
		const tokenIdZtASXa0 = BigInt("1151")
		const tokenAddressobVzaE8 = accounts[4]
		const transactionValue8s1HOR = BigInt("959")
		const buyerghow39B = accounts[3]
		const tokenIdu2r9MTV = BigInt("1099")
		const tokenAddressN33yJYt = accounts[3]
		const nullPCyxJJn = await contract76B9BJ.getTokenKey.call(tokenAddresslWP6BR, tokenIdxtGOBDU, {from: accounts[0]});
		await contract76B9BJ.giftLexART.call(tokenAddressobVzaE8, tokenIdZtASXa0, communityAddress8tmnJP, {from: accounts[3]});
		await contract76B9BJ.makeOffer.call(tokenAddressN33yJYt, tokenIdu2r9MTV, buyerghow39B, transactionValue8s1HOR, {from: accounts[5]});

		assert.equal(nullPCyxJJn, 0x598e50a5dfaba3ae01d6dcea6a32b975d64c2e2a00000000000000000000000000000000000000000000000000000000000007ec)
		await expect(contract76B9BJ.giftLexART.call(tokenAddressobVzaE8, tokenIdZtASXa0, communityAddress8tmnJP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractCZAudxf = await MolScribe.new({from: accounts[3]});
		const tokenIdJKWFp5U = BigInt("1174")
		const tokenAddressZsNCTEh = accounts[3]
		const _molFeehPqkihh = BigInt("1833")
		const _molBankhzKAS1N = accounts[0]
		await contractCZAudxf.acceptOffer.call(tokenAddressZsNCTEh, tokenIdJKWFp5U, {from: accounts[2]});
		await contractCZAudxf.updateMolFees.call(_molFeehPqkihh, {from: accounts[4]});
		await contractCZAudxf.updateMolBank.call(_molBankhzKAS1N, {from: accounts[3]});

		await expect(contractCZAudxf.acceptOffer.call(tokenAddressZsNCTEh, tokenIdJKWFp5U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})