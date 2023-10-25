const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contract3OOYzR = await MolScribe.new({from: accounts[1]});
		const _molBankEGuCkyq = accounts[3]
		const startingRoyaltiesnr0KtU = BigInt("206")
		const communityAddressRYOXzH4 = accounts[2]
		const tokenIdV9rjJjQ = BigInt("1511")
		const tokenAddresszaNRFte = accounts[2]
		const communityAddress6MMGLD = accounts[1]
		const tokenIddlPMgo0 = BigInt("1596")
		const tokenAddressOz3t7BM = accounts[0]
		const communityAddressZ4GHrE = accounts[1]
		const tokenId9W4qG8 = BigInt("650")
		const tokenAddressxOoSiT = accounts[1]
		const transactionValueFuDeUso = BigInt("392")
		const buyerYgIvnah = "0x0000000000000000000000000000000000000001"
		const tokenIdgtZnglq = BigInt("688")
		const tokenAddressFpN47zz = accounts[2]
		await contract3OOYzR.updateMolBank.call(_molBankEGuCkyq, {from: accounts[1]});
		await contract3OOYzR.scribeNFT.call(tokenAddresszaNRFte, tokenIdV9rjJjQ, communityAddressRYOXzH4, startingRoyaltiesnr0KtU, {from: "0x0000000000000000000000000000000000000001"});
		await contract3OOYzR.giftLexART.call(tokenAddressOz3t7BM, tokenIddlPMgo0, communityAddress6MMGLD, {from: accounts[3]});
		await contract3OOYzR.giftLexART.call(tokenAddressxOoSiT, tokenId9W4qG8, communityAddressZ4GHrE, {from: accounts[4]});
		await contract3OOYzR.makeOffer.call(tokenAddressFpN47zz, tokenIdgtZnglq, buyerYgIvnah, transactionValueFuDeUso, {from: accounts[5]});

		await expect(contract3OOYzR.updateMolBank.call(_molBankEGuCkyq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsVcFXhJ = await MolScribe.new({from: accounts[4]});
		const tokenIdxXGGFjl = BigInt("566")
		const tokenAddressTKHf8SX = accounts[1]
		const transactionValues6tmBm = BigInt("575")
		const buyerdpZDPc = accounts[4]
		const tokenIdclP3XAW = BigInt("776")
		const tokenAddressEDrwdn8 = accounts[4]
		const tokenIdvTzHeKB = BigInt("1662")
		const tokenAddressymU3iz6 = accounts[1]
		const tokenIdDfvnAab = BigInt("1024")
		const tokenAddressY05PICD = accounts[2]
		const tokenIdoL4sEhC = BigInt("1525")
		const tokenAddressdfwfsHu = accounts[4]
		const transactionValueIaczBv9 = BigInt("2046")
		const buyerB0BiLeB = accounts[0]
		const tokenIdxXBVCns = BigInt("1015")
		const tokenAddresszyNbcpJ = accounts[3]
		await contractsVcFXhJ.acceptOffer.call(tokenAddressTKHf8SX, tokenIdxXGGFjl, {from: accounts[1]});
		await contractsVcFXhJ.makeOffer.call(tokenAddressEDrwdn8, tokenIdclP3XAW, buyerdpZDPc, transactionValues6tmBm, {from: accounts[4]});
		await contractsVcFXhJ.acceptOffer.call(tokenAddressymU3iz6, tokenIdvTzHeKB, {from: accounts[0]});
		await contractsVcFXhJ.acceptOffer.call(tokenAddressY05PICD, tokenIdDfvnAab, {from: accounts[2]});
		await contractsVcFXhJ.acceptOffer.call(tokenAddressdfwfsHu, tokenIdoL4sEhC, {from: accounts[5]});
		await contractsVcFXhJ.makeOffer.call(tokenAddresszyNbcpJ, tokenIdxXBVCns, buyerB0BiLeB, transactionValueIaczBv9, {from: accounts[3]});

		await expect(contractsVcFXhJ.acceptOffer.call(tokenAddressTKHf8SX, tokenIdxXGGFjl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractUMIXgHL = await MolScribe.new({from: accounts[2]});
		const transactionValueDZ0nl7H = BigInt("1278")
		const buyerBF6Qyy1 = accounts[2]
		const tokenIdMa5G8qu = BigInt("1639")
		const tokenAddressLm9iq2K = accounts[3]
		const startingRoyaltiesUrLncxs = BigInt("32")
		const communityAddressMpzF64j = accounts[3]
		const tokenIdtkpWXT6 = BigInt("1893")
		const tokenAddressAcDUf2P = accounts[0]
		const _molFeeeXe4HYE = BigInt("1527")
		const transactionValueGdUzo6w = BigInt("1818")
		const buyerDyqt5iU = accounts[1]
		const tokenIdSv6BAMq = BigInt("695")
		const tokenAddressewA3903 = accounts[4]
		const _molJeJOFw8 = accounts[2]
		const tokenIdbEIoCeW = BigInt("636")
		const tokenAddressN2tR5o4 = accounts[1]
		await contractUMIXgHL.makeOffer.call(tokenAddressLm9iq2K, tokenIdMa5G8qu, buyerBF6Qyy1, transactionValueDZ0nl7H, {from: accounts[3]});
		await contractUMIXgHL.scribeNFT.call(tokenAddressAcDUf2P, tokenIdtkpWXT6, communityAddressMpzF64j, startingRoyaltiesUrLncxs, {from: accounts[4]});
		await contractUMIXgHL.updateMolFees.call(_molFeeeXe4HYE, {from: accounts[4]});
		await contractUMIXgHL.makeOffer.call(tokenAddressewA3903, tokenIdSv6BAMq, buyerDyqt5iU, transactionValueGdUzo6w, {from: accounts[3]});
		await contractUMIXgHL.updateMol.call(_molJeJOFw8, {from: accounts[0]});
		const nullOv0vPEM = await contractUMIXgHL.getTokenKey.call(tokenAddressN2tR5o4, tokenIdbEIoCeW, {from: accounts[5]});

		await expect(contractUMIXgHL.makeOffer.call(tokenAddressLm9iq2K, tokenIdMa5G8qu, buyerBF6Qyy1, transactionValueDZ0nl7H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractyC4lJoL = await MolScribe.new({from: accounts[3]});
		const tokenIdI5apt50 = BigInt("1704")
		const tokenAddressY1E1rdT = accounts[0]
		const _molFeeswveg35 = BigInt("75")
		const _molnocsqpy = accounts[4]
		const startingRoyaltiesBlcwC1P = BigInt("5")
		const communityAddressroqjja4 = accounts[2]
		const tokenIdKHW8XbX = BigInt("1189")
		const tokenAddressqRXq5dM = accounts[1]
		const nullf9PTpJB = await contractyC4lJoL.getTokenKey.call(tokenAddressY1E1rdT, tokenIdI5apt50, {from: accounts[2]});
		await contractyC4lJoL.updateMolFees.call(_molFeeswveg35, {from: accounts[5]});
		await contractyC4lJoL.updateMol.call(_molnocsqpy, {from: accounts[4]});
		await contractyC4lJoL.scribeNFT.call(tokenAddressqRXq5dM, tokenIdKHW8XbX, communityAddressroqjja4, startingRoyaltiesBlcwC1P, {from: accounts[1]});

		assert.equal(nullf9PTpJB, 0x37e01a5953246a09565f6d5fdd2fd2684902d3b200000000000000000000000000000000000000000000000000000000000006a8)
		await expect(contractyC4lJoL.updateMolFees.call(_molFeeswveg35, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractQHpzKjX = await MolScribe.new({from: accounts[4]});
		const tokenIdMZnJtl = BigInt("359")
		const tokenAddressom4Ta8M = accounts[4]
		const tokenIdTla0Mrg = BigInt("1004")
		const tokenAddressGAy0joG = accounts[5]
		const _molFeeEQad1MW = BigInt("1560")
		const startingRoyaltiesdTAk4Y0 = BigInt("215")
		const communityAddressnjLuqLB = accounts[3]
		const tokenIdrzQjgRt = BigInt("44")
		const tokenAddressRqa6ToK = accounts[1]
		await contractQHpzKjX.acceptOffer.call(tokenAddressom4Ta8M, tokenIdMZnJtl, {from: accounts[1]});
		const nullY2E2qqY = await contractQHpzKjX.getTokenKey.call(tokenAddressGAy0joG, tokenIdTla0Mrg, {from: "0x0000000000000000000000000000000000000001"});
		await contractQHpzKjX.updateMolFees.call(_molFeeEQad1MW, {from: accounts[2]});
		await contractQHpzKjX.scribeNFT.call(tokenAddressRqa6ToK, tokenIdrzQjgRt, communityAddressnjLuqLB, startingRoyaltiesdTAk4Y0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractQHpzKjX.acceptOffer.call(tokenAddressom4Ta8M, tokenIdMZnJtl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractKF1D8wb = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const startingRoyaltiesjPGRzr0 = BigInt("119")
		const communityAddressJZbSUYs = accounts[0]
		const tokenIdofwmXpe = BigInt("1087")
		const tokenAddressxJVJ5ZK = accounts[1]
		const communityAddressiBsrTNt = accounts[1]
		const tokenIdnRUs5C6 = BigInt("1315")
		const tokenAddressOAvOMZL = accounts[3]
		const _molBankBQBtRRu = "0x0000000000000000000000000000000000000001"
		await contractKF1D8wb.scribeNFT.call(tokenAddressxJVJ5ZK, tokenIdofwmXpe, communityAddressJZbSUYs, startingRoyaltiesjPGRzr0, {from: accounts[0]});
		await contractKF1D8wb.giftLexART.call(tokenAddressOAvOMZL, tokenIdnRUs5C6, communityAddressiBsrTNt, {from: accounts[1]});
		await contractKF1D8wb.updateMolBank.call(_molBankBQBtRRu, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractFa298Ch = await MolScribe.new({from: accounts[1]});
		const communityAddressTmCByaT = accounts[0]
		const tokenIdCyxC1sy = BigInt("1026")
		const tokenAddressfxRJNZ2 = "0x0000000000000000000000000000000000000001"
		const tokenIdW4eEZkM = BigInt("520")
		const tokenAddressiXscTfo = accounts[1]
		const tokenIdSmgwWg = BigInt("1290")
		const tokenAddressvEEIYwv = accounts[4]
		const startingRoyaltiesiGe8LPS = BigInt("84")
		const communityAddress2y9gzr = accounts[4]
		const tokenIdjvMq6Z2 = BigInt("1352")
		const tokenAddressLKNzJxl = accounts[2]
		const communityAddressLhBlwG7 = accounts[3]
		const tokenIdLfFhc1N = BigInt("552")
		const tokenAddressXiIq73 = accounts[4]
		const transactionValueZ4nxvk5 = BigInt("236")
		const buyertH01ug = accounts[3]
		const tokenIdiKQj6cS = BigInt("443")
		const tokenAddressz4DKth = accounts[1]
		await contractFa298Ch.giftLexART.call(tokenAddressfxRJNZ2, tokenIdCyxC1sy, communityAddressTmCByaT, {from: accounts[1]});
		const nullUrAOw4 = await contractFa298Ch.getTokenKey.call(tokenAddressiXscTfo, tokenIdW4eEZkM, {from: accounts[1]});
		const nulluAgdFI7 = await contractFa298Ch.getTokenKey.call(tokenAddressvEEIYwv, tokenIdSmgwWg, {from: accounts[5]});
		await contractFa298Ch.scribeNFT.call(tokenAddressLKNzJxl, tokenIdjvMq6Z2, communityAddress2y9gzr, startingRoyaltiesiGe8LPS, {from: accounts[1]});
		await contractFa298Ch.giftLexART.call(tokenAddressXiIq73, tokenIdLfFhc1N, communityAddressLhBlwG7, {from: accounts[1]});
		await contractFa298Ch.makeOffer.call(tokenAddressz4DKth, tokenIdiKQj6cS, buyertH01ug, transactionValueZ4nxvk5, {from: accounts[1]});

		await expect(contractFa298Ch.giftLexART.call(tokenAddressfxRJNZ2, tokenIdCyxC1sy, communityAddressTmCByaT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFBsWP3f = await MolScribe.new({from: accounts[2]});
		const startingRoyaltiesDaIaa3O = BigInt("76")
		const communityAddressv52O4rg = accounts[2]
		const tokenIdfwlBMtd = BigInt("1315")
		const tokenAddressOkWDM0L = accounts[5]
		const communityAddressqq0TPD3 = accounts[5]
		const tokenIdOfLbLYK = BigInt("1124")
		const tokenAddressRxFynxv = accounts[0]
		const _molBankybi3hcN = accounts[2]
		await contractFBsWP3f.scribeNFT.call(tokenAddressOkWDM0L, tokenIdfwlBMtd, communityAddressv52O4rg, startingRoyaltiesDaIaa3O, {from: accounts[5]});
		await contractFBsWP3f.giftLexART.call(tokenAddressRxFynxv, tokenIdOfLbLYK, communityAddressqq0TPD3, {from: accounts[5]});
		await contractFBsWP3f.updateMolBank.call(_molBankybi3hcN, {from: accounts[4]});

		await expect(contractFBsWP3f.scribeNFT.call(tokenAddressOkWDM0L, tokenIdfwlBMtd, communityAddressv52O4rg, startingRoyaltiesDaIaa3O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})