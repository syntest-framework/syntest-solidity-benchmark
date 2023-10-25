const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractfv2FSY9 = await MolScribe.new({from: accounts[4]});
		const tokenIdmVScmhT = BigInt("740")
		const tokenAddressmXTy3bI = accounts[1]
		const startingRoyaltiesASkJAc9 = BigInt("189")
		const communityAddressVcUKM2W = "0x0000000000000000000000000000000000000001"
		const tokenId0ZaURS = BigInt("1190")
		const tokenAddressR1ecurO = accounts[4]
		await contractfv2FSY9.acceptOffer.call(tokenAddressmXTy3bI, tokenIdmVScmhT, {from: accounts[3]});
		await contractfv2FSY9.scribeNFT.call(tokenAddressR1ecurO, tokenId0ZaURS, communityAddressVcUKM2W, startingRoyaltiesASkJAc9, {from: accounts[4]});

		await expect(contractfv2FSY9.acceptOffer.call(tokenAddressmXTy3bI, tokenIdmVScmhT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractDQda0I = await MolScribe.new({from: accounts[0]});
		const tokenIdPi5t1t8 = BigInt("320")
		const tokenAddressXH6R0z = accounts[2]
		const _molBanksIGIskw = accounts[2]
		const startingRoyaltiesxHc6viV = BigInt("95")
		const communityAddresson75cG = accounts[0]
		const tokenIdJIJAg4d = BigInt("1716")
		const tokenAddressbnBplXQ = accounts[4]
		const _molBankGgEl4vP = "0x0000000000000000000000000000000000000001"
		const tokenIdB18cRq1 = BigInt("728")
		const tokenAddressEVrstKH = accounts[4]
		await contractDQda0I.acceptOffer.call(tokenAddressXH6R0z, tokenIdPi5t1t8, {from: accounts[1]});
		await contractDQda0I.updateMolBank.call(_molBanksIGIskw, {from: accounts[4]});
		await contractDQda0I.scribeNFT.call(tokenAddressbnBplXQ, tokenIdJIJAg4d, communityAddresson75cG, startingRoyaltiesxHc6viV, {from: accounts[5]});
		await contractDQda0I.updateMolBank.call(_molBankGgEl4vP, {from: accounts[4]});
		await contractDQda0I.acceptOffer.call(tokenAddressEVrstKH, tokenIdB18cRq1, {from: accounts[1]});

		await expect(contractDQda0I.acceptOffer.call(tokenAddressXH6R0z, tokenIdPi5t1t8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractifsTYr7 = await MolScribe.new({from: accounts[2]});
		const _molFeeVF4lQYx = BigInt("262")
		const transactionValueJNpSU5E = BigInt("1752")
		const buyerSyqBWRb = accounts[3]
		const tokenIdC9Y32O0 = BigInt("258")
		const tokenAddressNLjfE8V = accounts[4]
		await contractifsTYr7.updateMolFees.call(_molFeeVF4lQYx, {from: accounts[3]});
		await contractifsTYr7.makeOffer.call(tokenAddressNLjfE8V, tokenIdC9Y32O0, buyerSyqBWRb, transactionValueJNpSU5E, {from: accounts[5]});

		await expect(contractifsTYr7.updateMolFees.call(_molFeeVF4lQYx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractVIC5oQ = await MolScribe.new({from: accounts[5]});
		const communityAddressw2GEO3V = "0x0000000000000000000000000000000000000001"
		const tokenIdLzyIpet = BigInt("83")
		const tokenAddresspzzXKbA = accounts[3]
		const tokenIdU1513l = BigInt("1843")
		const tokenAddressCG68I6t = accounts[0]
		await contractVIC5oQ.giftLexART.call(tokenAddresspzzXKbA, tokenIdLzyIpet, communityAddressw2GEO3V, {from: accounts[5]});
		const nullB2af1Bb = await contractVIC5oQ.getTokenKey.call(tokenAddressCG68I6t, tokenIdU1513l, {from: accounts[2]});

		await expect(contractVIC5oQ.giftLexART.call(tokenAddresspzzXKbA, tokenIdLzyIpet, communityAddressw2GEO3V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractlW5JS6D = await MolScribe.new({from: accounts[1]});
		const transactionValued0Nn3mI = BigInt("995")
		const buyeryAHzvyc = accounts[4]
		const tokenIdshbmskB = BigInt("2019")
		const tokenAddressW4vfF2F = accounts[0]
		const _molBankqWg4T8q = accounts[5]
		const communityAddressFqXFe18 = accounts[5]
		const tokenIdC6Zmzlu = BigInt("1982")
		const tokenAddressBkUDH8m = accounts[4]
		const _molBankdcBXI8y = accounts[2]
		const tokenIdULeS3yL = BigInt("627")
		const tokenAddresspQA56Qw = "0x0000000000000000000000000000000000000001"
		await contractlW5JS6D.makeOffer.call(tokenAddressW4vfF2F, tokenIdshbmskB, buyeryAHzvyc, transactionValued0Nn3mI, {from: accounts[5]});
		await contractlW5JS6D.updateMolBank.call(_molBankqWg4T8q, {from: accounts[1]});
		await contractlW5JS6D.giftLexART.call(tokenAddressBkUDH8m, tokenIdC6Zmzlu, communityAddressFqXFe18, {from: accounts[2]});
		await contractlW5JS6D.updateMolBank.call(_molBankdcBXI8y, {from: accounts[0]});
		const nullhTbWiTL = await contractlW5JS6D.getTokenKey.call(tokenAddresspQA56Qw, tokenIdULeS3yL, {from: accounts[1]});

		await expect(contractlW5JS6D.makeOffer.call(tokenAddressW4vfF2F, tokenIdshbmskB, buyeryAHzvyc, transactionValued0Nn3mI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractt2zkk8H = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesfdaz2uc = BigInt("235")
		const communityAddressMke93MD = accounts[0]
		const tokenIdIsdJtEa = BigInt("1510")
		const tokenAddressayAnXWu = accounts[0]
		const _molBankJmiYXYJ = accounts[0]
		const _molBankjO6dXa6 = accounts[2]
		const transactionValuezkTiG2D = BigInt("152")
		const buyerBeJGpNA = accounts[1]
		const tokenIdyufgWQT = BigInt("228")
		const tokenAddressXKzTW5O = accounts[1]
		await contractt2zkk8H.scribeNFT.call(tokenAddressayAnXWu, tokenIdIsdJtEa, communityAddressMke93MD, startingRoyaltiesfdaz2uc, {from: accounts[5]});
		await contractt2zkk8H.updateMolBank.call(_molBankJmiYXYJ, {from: accounts[0]});
		await contractt2zkk8H.updateMolBank.call(_molBankjO6dXa6, {from: accounts[4]});
		await contractt2zkk8H.makeOffer.call(tokenAddressXKzTW5O, tokenIdyufgWQT, buyerBeJGpNA, transactionValuezkTiG2D, {from: accounts[5]});

		await expect(contractt2zkk8H.scribeNFT.call(tokenAddressayAnXWu, tokenIdIsdJtEa, communityAddressMke93MD, startingRoyaltiesfdaz2uc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractCBJ3JV = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdYG9i8oq = BigInt("1694")
		const tokenAddresskNYs1zM = accounts[3]
		const transactionValueEvUpwrX = BigInt("1156")
		const buyerxpW4HX5 = accounts[3]
		const tokenId8Iw4Ae = BigInt("287")
		const tokenAddressPL62OC3 = accounts[1]
		const _molBank7fMMXV = accounts[4]
		const startingRoyaltiesek8tFuY = BigInt("17")
		const communityAddressaReL2UD = accounts[2]
		const tokenIdjtRm5ZV = BigInt("1924")
		const tokenAddressWmK0YV = "0x0000000000000000000000000000000000000001"
		const _molBankK768HMW = accounts[0]
		const nullXi6ZaZf = await contractCBJ3JV.getTokenKey.call(tokenAddresskNYs1zM, tokenIdYG9i8oq, {from: accounts[1]});
		await contractCBJ3JV.makeOffer.call(tokenAddressPL62OC3, tokenId8Iw4Ae, buyerxpW4HX5, transactionValueEvUpwrX, {from: accounts[4]});
		await contractCBJ3JV.updateMolBank.call(_molBank7fMMXV, {from: accounts[3]});
		await contractCBJ3JV.scribeNFT.call(tokenAddressWmK0YV, tokenIdjtRm5ZV, communityAddressaReL2UD, startingRoyaltiesek8tFuY, {from: accounts[4]});
		await contractCBJ3JV.updateMolBank.call(_molBankK768HMW, {from: "0x0000000000000000000000000000000000000001"});
	});
})