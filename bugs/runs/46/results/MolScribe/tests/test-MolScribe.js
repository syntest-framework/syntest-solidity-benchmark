const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractuewiOrE = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesFoHfxQA = BigInt("125")
		const communityAddressKXmR051 = accounts[3]
		const tokenIdO0PUFSe = BigInt("1631")
		const tokenAddressWg6IiQQ = accounts[1]
		const _molFeejGdC7HB = BigInt("835")
		const startingRoyaltiesxMTITNJ = BigInt("102")
		const communityAddresspkCuLO1 = accounts[3]
		const tokenIdxwfcfE5 = BigInt("910")
		const tokenAddressX0kJFuF = accounts[3]
		await contractuewiOrE.scribeNFT.call(tokenAddressWg6IiQQ, tokenIdO0PUFSe, communityAddressKXmR051, startingRoyaltiesFoHfxQA, {from: accounts[4]});
		await contractuewiOrE.updateMolFees.call(_molFeejGdC7HB, {from: accounts[1]});
		await contractuewiOrE.scribeNFT.call(tokenAddressX0kJFuF, tokenIdxwfcfE5, communityAddresspkCuLO1, startingRoyaltiesxMTITNJ, {from: accounts[2]});

		await expect(contractuewiOrE.scribeNFT.call(tokenAddressWg6IiQQ, tokenIdO0PUFSe, communityAddressKXmR051, startingRoyaltiesFoHfxQA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractq8QDqsB = await MolScribe.new({from: accounts[0]});
		const _molFeeDfqrUz8 = BigInt("1133")
		const transactionValueoDfpHrL = BigInt("1310")
		const buyerHMCGXTY = accounts[0]
		const tokenIdAHSP7R = BigInt("1376")
		const tokenAddresshvakFu8 = accounts[4]
		const startingRoyaltiesmUD2CBb = BigInt("234")
		const communityAddressXXmy5XP = accounts[5]
		const tokenIdUaPjjf5 = BigInt("119")
		const tokenAddressjgUikmG = accounts[2]
		const tokenIdoRWJfI = BigInt("1262")
		const tokenAddressYVh9b7d = accounts[3]
		const startingRoyaltiesBO2wm9x = BigInt("92")
		const communityAddressPkzHZ3r = accounts[3]
		const tokenIdFyR5SaJ = BigInt("145")
		const tokenAddressMvSAaHj = accounts[1]
		await contractq8QDqsB.updateMolFees.call(_molFeeDfqrUz8, {from: accounts[3]});
		await contractq8QDqsB.makeOffer.call(tokenAddresshvakFu8, tokenIdAHSP7R, buyerHMCGXTY, transactionValueoDfpHrL, {from: accounts[3]});
		await contractq8QDqsB.scribeNFT.call(tokenAddressjgUikmG, tokenIdUaPjjf5, communityAddressXXmy5XP, startingRoyaltiesmUD2CBb, {from: accounts[2]});
		await contractq8QDqsB.acceptOffer.call(tokenAddressYVh9b7d, tokenIdoRWJfI, {from: "0x0000000000000000000000000000000000000001"});
		await contractq8QDqsB.scribeNFT.call(tokenAddressMvSAaHj, tokenIdFyR5SaJ, communityAddressPkzHZ3r, startingRoyaltiesBO2wm9x, {from: accounts[1]});

		await expect(contractq8QDqsB.updateMolFees.call(_molFeeDfqrUz8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractqak74B2 = await MolScribe.new({from: accounts[1]});
		const tokenIdPSVspcf = BigInt("475")
		const tokenAddressl5QGIFi = accounts[3]
		const _molBankHnzxSak = accounts[1]
		const _molFeeyvv4UOE = BigInt("1800")
		const transactionValueNtj684H = BigInt("648")
		const buyerpKW4ey1 = accounts[3]
		const tokenIdi47tiBK = BigInt("627")
		const tokenAddresspjbzeiV = accounts[1]
		const startingRoyalties2930OM = BigInt("198")
		const communityAddressOzj3t9l = accounts[1]
		const tokenIdGOlsDNU = BigInt("1792")
		const tokenAddressDnDuctN = accounts[0]
		await contractqak74B2.acceptOffer.call(tokenAddressl5QGIFi, tokenIdPSVspcf, {from: accounts[4]});
		await contractqak74B2.updateMolBank.call(_molBankHnzxSak, {from: accounts[4]});
		await contractqak74B2.updateMolFees.call(_molFeeyvv4UOE, {from: "0x0000000000000000000000000000000000000001"});
		await contractqak74B2.makeOffer.call(tokenAddresspjbzeiV, tokenIdi47tiBK, buyerpKW4ey1, transactionValueNtj684H, {from: accounts[1]});
		await contractqak74B2.scribeNFT.call(tokenAddressDnDuctN, tokenIdGOlsDNU, communityAddressOzj3t9l, startingRoyalties2930OM, {from: accounts[5]});

		await expect(contractqak74B2.acceptOffer.call(tokenAddressl5QGIFi, tokenIdPSVspcf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractjixZ41v = await MolScribe.new({from: accounts[2]});
		const transactionValueXmZYb69 = BigInt("1402")
		const buyeroK2SnqC = accounts[1]
		const tokenIdEnkBSV7 = BigInt("821")
		const tokenAddressIwBpfv = accounts[4]
		const tokenIdXvQhlXH = BigInt("735")
		const tokenAddressGc04bQx = accounts[1]
		const tokenIdW4AarUH = BigInt("1512")
		const tokenAddressQHPiop0 = accounts[0]
		await contractjixZ41v.makeOffer.call(tokenAddressIwBpfv, tokenIdEnkBSV7, buyeroK2SnqC, transactionValueXmZYb69, {from: accounts[2]});
		const nullc7mY9Ql = await contractjixZ41v.getTokenKey.call(tokenAddressGc04bQx, tokenIdXvQhlXH, {from: accounts[5]});
		const nullOx6hxNI = await contractjixZ41v.getTokenKey.call(tokenAddressQHPiop0, tokenIdW4AarUH, {from: accounts[4]});

		await expect(contractjixZ41v.makeOffer.call(tokenAddressIwBpfv, tokenIdEnkBSV7, buyeroK2SnqC, transactionValueXmZYb69, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractz5RDSl0 = await MolScribe.new({from: accounts[4]});
		const tokenIdQ1jx4uk = BigInt("818")
		const tokenAddressBB6n9K1 = accounts[4]
		const communityAddressN7e9MR = accounts[0]
		const tokenIdbfTem6H = BigInt("1308")
		const tokenAddressg83w0oB = accounts[5]
		const tokenIdez5WVf = BigInt("1063")
		const tokenAddressJaqzeQg = accounts[1]
		const _moluYNaWS7 = accounts[0]
		const tokenIdqqfDdSc = BigInt("526")
		const tokenAddresslRbxTxl = accounts[1]
		const communityAddressUDQFQm2 = accounts[2]
		const tokenIddoCyX3m = BigInt("1844")
		const tokenAddressNaVBBa = accounts[2]
		const startingRoyaltiesbKKnGNt = BigInt("21")
		const communityAddressfDq6Ktd = accounts[2]
		const tokenIdwkd5iI8 = BigInt("2011")
		const tokenAddressYGmUWD7 = accounts[5]
		const tokenIdW9oA6Us = BigInt("1465")
		const tokenAddresstypWv0U = accounts[0]
		const nulliNXPhAS = await contractz5RDSl0.getTokenKey.call(tokenAddressBB6n9K1, tokenIdQ1jx4uk, {from: accounts[1]});
		await contractz5RDSl0.giftLexART.call(tokenAddressg83w0oB, tokenIdbfTem6H, communityAddressN7e9MR, {from: accounts[4]});
		const nullKo0oB1M = await contractz5RDSl0.getTokenKey.call(tokenAddressJaqzeQg, tokenIdez5WVf, {from: accounts[0]});
		await contractz5RDSl0.updateMol.call(_moluYNaWS7, {from: accounts[3]});
		await contractz5RDSl0.acceptOffer.call(tokenAddresslRbxTxl, tokenIdqqfDdSc, {from: accounts[5]});
		await contractz5RDSl0.giftLexART.call(tokenAddressNaVBBa, tokenIddoCyX3m, communityAddressUDQFQm2, {from: accounts[2]});
		await contractz5RDSl0.scribeNFT.call(tokenAddressYGmUWD7, tokenIdwkd5iI8, communityAddressfDq6Ktd, startingRoyaltiesbKKnGNt, {from: "0x0000000000000000000000000000000000000001"});
		const nullKIMLVf3 = await contractz5RDSl0.getTokenKey.call(tokenAddresstypWv0U, tokenIdW9oA6Us, {from: accounts[2]});

		assert.equal(nulliNXPhAS, 0xa9ec58d91552773da0b07db814702e2b388378590000000000000000000000000000000000000000000000000000000000000332)
		await expect(contractz5RDSl0.giftLexART.call(tokenAddressg83w0oB, tokenIdbfTem6H, communityAddressN7e9MR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractVgl8Ic6 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdIRAr6Nw = BigInt("1149")
		const tokenAddressqAEdoi7 = accounts[4]
		const _molBankTjyfCDY = accounts[2]
		const startingRoyaltiesTpHO8Q7 = BigInt("208")
		const communityAddresso6Gtl8R = "0x0000000000000000000000000000000000000001"
		const tokenIdrKNaABI = BigInt("1483")
		const tokenAddress9uE430 = "0x0000000000000000000000000000000000000001"
		const _molBankhTvXHX = accounts[5]
		const tokenIdL5G0Uo = BigInt("20")
		const tokenAddressm8bafm4 = accounts[4]
		const tokenIdxyZHerU = BigInt("941")
		const tokenAddressdVItvH2 = accounts[4]
		const nullEyCBj8 = await contractVgl8Ic6.getTokenKey.call(tokenAddressqAEdoi7, tokenIdIRAr6Nw, {from: accounts[3]});
		await contractVgl8Ic6.updateMolBank.call(_molBankTjyfCDY, {from: accounts[0]});
		await contractVgl8Ic6.scribeNFT.call(tokenAddress9uE430, tokenIdrKNaABI, communityAddresso6Gtl8R, startingRoyaltiesTpHO8Q7, {from: accounts[1]});
		await contractVgl8Ic6.updateMolBank.call(_molBankhTvXHX, {from: accounts[5]});
		await contractVgl8Ic6.acceptOffer.call(tokenAddressm8bafm4, tokenIdL5G0Uo, {from: accounts[1]});
		await contractVgl8Ic6.acceptOffer.call(tokenAddressdVItvH2, tokenIdxyZHerU, {from: accounts[2]});
	});
})