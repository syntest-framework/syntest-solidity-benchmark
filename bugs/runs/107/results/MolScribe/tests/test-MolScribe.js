const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractNWxA3V3 = await MolScribe.new({from: accounts[4]});
		const tokenIdPt8elK5 = BigInt("370")
		const tokenAddresscngQQy0 = accounts[1]
		const communityAddressttmulgk = accounts[0]
		const tokenIduoDJsgQ = BigInt("61")
		const tokenAddressyvKL5Cr = accounts[0]
		const tokenIdiYrV5t1 = BigInt("122")
		const tokenAddressh2IZpfD = accounts[3]
		const nullVjVwZNW = await contractNWxA3V3.getTokenKey.call(tokenAddresscngQQy0, tokenIdPt8elK5, {from: accounts[0]});
		await contractNWxA3V3.giftLexART.call(tokenAddressyvKL5Cr, tokenIduoDJsgQ, communityAddressttmulgk, {from: accounts[3]});
		await contractNWxA3V3.acceptOffer.call(tokenAddressh2IZpfD, tokenIdiYrV5t1, {from: accounts[1]});

		assert.equal(nullVjVwZNW, 0xb8c921184abd6a6af3a80464f4a9c3b51ad11cfd0000000000000000000000000000000000000000000000000000000000000172)
		await expect(contractNWxA3V3.giftLexART.call(tokenAddressyvKL5Cr, tokenIduoDJsgQ, communityAddressttmulgk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractyMcbH0s = await MolScribe.new({from: accounts[0]});
		const tokenIdfEPdz2h = BigInt("997")
		const tokenAddressxT5ugz = accounts[1]
		const _molBankPyZeqt = "0x0000000000000000000000000000000000000001"
		const nullDjuwzG8 = await contractyMcbH0s.getTokenKey.call(tokenAddressxT5ugz, tokenIdfEPdz2h, {from: accounts[4]});
		await contractyMcbH0s.updateMolBank.call(_molBankPyZeqt, {from: accounts[1]});

		assert.equal(nullDjuwzG8, 0xb8c921184abd6a6af3a80464f4a9c3b51ad11cfd00000000000000000000000000000000000000000000000000000000000003e5)
		await expect(contractyMcbH0s.updateMolBank.call(_molBankPyZeqt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractKDKe7Jd = await MolScribe.new({from: accounts[0]});
		const tokenIdX6NxxvT = BigInt("1870")
		const tokenAddressZVv5PaD = accounts[0]
		const _molBankfDYCDiB = accounts[0]
		const tokenIdLpuTE4J = BigInt("639")
		const tokenAddressxbac9BQ = accounts[0]
		await contractKDKe7Jd.acceptOffer.call(tokenAddressZVv5PaD, tokenIdX6NxxvT, {from: accounts[2]});
		await contractKDKe7Jd.updateMolBank.call(_molBankfDYCDiB, {from: accounts[5]});
		await contractKDKe7Jd.acceptOffer.call(tokenAddressxbac9BQ, tokenIdLpuTE4J, {from: accounts[0]});

		await expect(contractKDKe7Jd.acceptOffer.call(tokenAddressZVv5PaD, tokenIdX6NxxvT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractiu1zC6A = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesOFWhgeC = BigInt("140")
		const communityAddressUqPLnQi = accounts[0]
		const tokenIdXXAtfIe = BigInt("815")
		const tokenAddressXj32Kyh = accounts[2]
		const _molFeesIeASVN = BigInt("1791")
		await contractiu1zC6A.scribeNFT.call(tokenAddressXj32Kyh, tokenIdXXAtfIe, communityAddressUqPLnQi, startingRoyaltiesOFWhgeC, {from: accounts[4]});
		await contractiu1zC6A.updateMolFees.call(_molFeesIeASVN, {from: accounts[2]});

		await expect(contractiu1zC6A.scribeNFT.call(tokenAddressXj32Kyh, tokenIdXXAtfIe, communityAddressUqPLnQi, startingRoyaltiesOFWhgeC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracthczceEF = await MolScribe.new({from: accounts[4]});
		const transactionValueY4XkjC = BigInt("577")
		const buyerastD7jM = accounts[4]
		const tokenIdOODeHbe = BigInt("971")
		const tokenAddressvs0sf47 = accounts[3]
		const _molXrz0HVm = accounts[5]
		await contracthczceEF.makeOffer.call(tokenAddressvs0sf47, tokenIdOODeHbe, buyerastD7jM, transactionValueY4XkjC, {from: accounts[1]});
		await contracthczceEF.updateMol.call(_molXrz0HVm, {from: accounts[2]});

		await expect(contracthczceEF.makeOffer.call(tokenAddressvs0sf47, tokenIdOODeHbe, buyerastD7jM, transactionValueY4XkjC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractwOvVwj = await MolScribe.new({from: accounts[1]});
		const communityAddressryzbvg = accounts[0]
		const tokenIdiqsnQmh = BigInt("35")
		const tokenAddressgsrFUr9 = accounts[4]
		const transactionValuesWinEE = BigInt("413")
		const buyerXFstMV = accounts[2]
		const tokenIdlo6WLOr = BigInt("1506")
		const tokenAddressTtowmfK = accounts[3]
		const tokenIdCD76Ekv = BigInt("1178")
		const tokenAddressXN5fIFm = accounts[4]
		const tokenIdaNtmEA = BigInt("200")
		const tokenAddresspvEYIJW = "0x0000000000000000000000000000000000000001"
		const _molBanknwFmJEH = "0x0000000000000000000000000000000000000001"
		await contractwOvVwj.giftLexART.call(tokenAddressgsrFUr9, tokenIdiqsnQmh, communityAddressryzbvg, {from: "0x0000000000000000000000000000000000000001"});
		await contractwOvVwj.makeOffer.call(tokenAddressTtowmfK, tokenIdlo6WLOr, buyerXFstMV, transactionValuesWinEE, {from: accounts[3]});
		await contractwOvVwj.acceptOffer.call(tokenAddressXN5fIFm, tokenIdCD76Ekv, {from: "0x0000000000000000000000000000000000000001"});
		await contractwOvVwj.acceptOffer.call(tokenAddresspvEYIJW, tokenIdaNtmEA, {from: accounts[1]});
		await contractwOvVwj.updateMolBank.call(_molBanknwFmJEH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractwOvVwj.giftLexART.call(tokenAddressgsrFUr9, tokenIdiqsnQmh, communityAddressryzbvg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractSCMbA5 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const startingRoyaltieszbZ8HTt = BigInt("168")
		const communityAddressCKR5cV = accounts[4]
		const tokenId45sEEF = BigInt("726")
		const tokenAddressowWzT5e = accounts[4]
		const communityAddressu2Teer = accounts[3]
		const tokenIdDeUrjxa = BigInt("1294")
		const tokenAddressPIDo1eZ = accounts[1]
		const communityAddressqPl1heS = accounts[2]
		const tokenIda40WWWy = BigInt("673")
		const tokenAddressVTCGNnc = accounts[2]
		const communityAddressOFV59QD = accounts[4]
		const tokenIdQh8cuf = BigInt("1917")
		const tokenAddressnaouyk = accounts[3]
		await contractSCMbA5.scribeNFT.call(tokenAddressowWzT5e, tokenId45sEEF, communityAddressCKR5cV, startingRoyaltieszbZ8HTt, {from: accounts[1]});
		await contractSCMbA5.giftLexART.call(tokenAddressPIDo1eZ, tokenIdDeUrjxa, communityAddressu2Teer, {from: accounts[1]});
		await contractSCMbA5.giftLexART.call(tokenAddressVTCGNnc, tokenIda40WWWy, communityAddressqPl1heS, {from: accounts[2]});
		await contractSCMbA5.giftLexART.call(tokenAddressnaouyk, tokenIdQh8cuf, communityAddressOFV59QD, {from: accounts[0]});
	});
})