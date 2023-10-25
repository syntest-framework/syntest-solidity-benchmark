const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractO5ohTQo = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesMLmBzmz = BigInt("137")
		const communityAddresseHLF8WG = accounts[1]
		const tokenIdgVisyKq = BigInt("1356")
		const tokenAddressfinLx1W = "0x0000000000000000000000000000000000000001"
		const tokenIdlJGw9Ea = BigInt("531")
		const tokenAddressaJvgEk4 = accounts[0]
		const _molFeeA7hrD4l = BigInt("163")
		const _molFeeHulLVfW = BigInt("1442")
		const transactionValueS5OsZzt = BigInt("914")
		const buyerbFXHjv = accounts[3]
		const tokenIdLYnI3nU = BigInt("230")
		const tokenAddresscZzcVRv = accounts[3]
		await contractO5ohTQo.scribeNFT.call(tokenAddressfinLx1W, tokenIdgVisyKq, communityAddresseHLF8WG, startingRoyaltiesMLmBzmz, {from: accounts[2]});
		await contractO5ohTQo.acceptOffer.call(tokenAddressaJvgEk4, tokenIdlJGw9Ea, {from: accounts[3]});
		await contractO5ohTQo.updateMolFees.call(_molFeeA7hrD4l, {from: accounts[0]});
		await contractO5ohTQo.updateMolFees.call(_molFeeHulLVfW, {from: accounts[4]});
		await contractO5ohTQo.makeOffer.call(tokenAddresscZzcVRv, tokenIdLYnI3nU, buyerbFXHjv, transactionValueS5OsZzt, {from: accounts[4]});

		await expect(contractO5ohTQo.scribeNFT.call(tokenAddressfinLx1W, tokenIdgVisyKq, communityAddresseHLF8WG, startingRoyaltiesMLmBzmz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractgAnYk3r = await MolScribe.new({from: accounts[3]});
		const transactionValueSS1ZOuB = BigInt("933")
		const buyerNyHcFM7 = accounts[2]
		const tokenIdYgzCko = BigInt("1171")
		const tokenAddressLmZ7Rju = accounts[4]
		const tokenIdKKWvhB6 = BigInt("1852")
		const tokenAddressOVx3xb0 = accounts[0]
		const transactionValueUcxx7nG = BigInt("295")
		const buyerDpYclo5 = "0x0000000000000000000000000000000000000001"
		const tokenIdZDy8SFj = BigInt("1087")
		const tokenAddresszejX1re = accounts[0]
		await contractgAnYk3r.makeOffer.call(tokenAddressLmZ7Rju, tokenIdYgzCko, buyerNyHcFM7, transactionValueSS1ZOuB, {from: accounts[4]});
		const nullPuGfSb = await contractgAnYk3r.getTokenKey.call(tokenAddressOVx3xb0, tokenIdKKWvhB6, {from: accounts[2]});
		await contractgAnYk3r.makeOffer.call(tokenAddresszejX1re, tokenIdZDy8SFj, buyerDpYclo5, transactionValueUcxx7nG, {from: accounts[2]});

		await expect(contractgAnYk3r.makeOffer.call(tokenAddressLmZ7Rju, tokenIdYgzCko, buyerNyHcFM7, transactionValueSS1ZOuB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractxdYpOml = await MolScribe.new({from: accounts[4]});
		const tokenIdy2n2xd = BigInt("1081")
		const tokenAddressgkNax68 = accounts[2]
		const tokenIdE44KArM = BigInt("1882")
		const tokenAddressJ7m0i9m = "0x0000000000000000000000000000000000000001"
		const transactionValueH0m6rDy = BigInt("1117")
		const buyer0FrfoU = accounts[4]
		const tokenIdSL7reR6 = BigInt("1820")
		const tokenAddresshkeE0Tk = accounts[1]
		const tokenIdjed0qHn = BigInt("1860")
		const tokenAddressEeaimp0 = accounts[5]
		await contractxdYpOml.acceptOffer.call(tokenAddressgkNax68, tokenIdy2n2xd, {from: accounts[3]});
		await contractxdYpOml.acceptOffer.call(tokenAddressJ7m0i9m, tokenIdE44KArM, {from: accounts[5]});
		await contractxdYpOml.makeOffer.call(tokenAddresshkeE0Tk, tokenIdSL7reR6, buyer0FrfoU, transactionValueH0m6rDy, {from: accounts[1]});
		await contractxdYpOml.acceptOffer.call(tokenAddressEeaimp0, tokenIdjed0qHn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractxdYpOml.acceptOffer.call(tokenAddressgkNax68, tokenIdy2n2xd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGs2WDQ = await MolScribe.new({from: accounts[3]});
		const tokenIdnOXlytE = BigInt("107")
		const tokenAddressl1OkrBg = accounts[0]
		const startingRoyaltiesBaXAU9L = BigInt("221")
		const communityAddresslddKm4K = accounts[2]
		const tokenIdjvDkAi2 = BigInt("1098")
		const tokenAddressfE1dEVM = accounts[2]
		const tokenIdmifoJmt = BigInt("1996")
		const tokenAddressfa4DPjh = accounts[1]
		const transactionValueg0i5Yw = BigInt("1520")
		const buyerkVBs6ZS = accounts[3]
		const tokenIdyE9mJh7 = BigInt("513")
		const tokenAddressop9p6Bl = accounts[4]
		const tokenIdVHWXEGo = BigInt("557")
		const tokenAddress0ZRn1h = accounts[3]
		const transactionValueXaEAXcQ = BigInt("32")
		const buyerzD6YIQr = accounts[3]
		const tokenIddCRutIT = BigInt("599")
		const tokenAddresssclnQkz = accounts[1]
		await contractGs2WDQ.acceptOffer.call(tokenAddressl1OkrBg, tokenIdnOXlytE, {from: accounts[5]});
		await contractGs2WDQ.scribeNFT.call(tokenAddressfE1dEVM, tokenIdjvDkAi2, communityAddresslddKm4K, startingRoyaltiesBaXAU9L, {from: accounts[5]});
		await contractGs2WDQ.acceptOffer.call(tokenAddressfa4DPjh, tokenIdmifoJmt, {from: accounts[5]});
		await contractGs2WDQ.makeOffer.call(tokenAddressop9p6Bl, tokenIdyE9mJh7, buyerkVBs6ZS, transactionValueg0i5Yw, {from: accounts[5]});
		const nullObT1vnK = await contractGs2WDQ.getTokenKey.call(tokenAddress0ZRn1h, tokenIdVHWXEGo, {from: accounts[2]});
		await contractGs2WDQ.makeOffer.call(tokenAddresssclnQkz, tokenIddCRutIT, buyerzD6YIQr, transactionValueXaEAXcQ, {from: accounts[0]});

		await expect(contractGs2WDQ.acceptOffer.call(tokenAddressl1OkrBg, tokenIdnOXlytE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractlSenq0A = await MolScribe.new({from: accounts[3]});
		const _molBankTlDN9XE = accounts[3]
		const _molkWcrSa1 = accounts[4]
		const transactionValuezbg4irs = BigInt("724")
		const buyerWhCgK7A = accounts[3]
		const tokenIdAELXBau = BigInt("274")
		const tokenAddressiFwbABz = accounts[1]
		const _moldrxWRR0 = accounts[1]
		await contractlSenq0A.updateMolBank.call(_molBankTlDN9XE, {from: accounts[0]});
		await contractlSenq0A.updateMol.call(_molkWcrSa1, {from: accounts[4]});
		await contractlSenq0A.makeOffer.call(tokenAddressiFwbABz, tokenIdAELXBau, buyerWhCgK7A, transactionValuezbg4irs, {from: "0x0000000000000000000000000000000000000001"});
		await contractlSenq0A.updateMol.call(_moldrxWRR0, {from: accounts[3]});

		await expect(contractlSenq0A.updateMolBank.call(_molBankTlDN9XE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractaK5fnj = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdfHLRX6 = BigInt("2032")
		const tokenAddressjynPn67 = accounts[1]
		const _molFeeMaXz4fu = BigInt("1834")
		const nullOl4Weq = await contractaK5fnj.getTokenKey.call(tokenAddressjynPn67, tokenIdfHLRX6, {from: accounts[1]});
		await contractaK5fnj.updateMolFees.call(_molFeeMaXz4fu, {from: accounts[5]});
	});

	it('test for MolScribe', async () => {
		const contractiLc1RpU = await MolScribe.new({from: accounts[4]});
		const communityAddresshOSjHjH = accounts[4]
		const tokenIdWMFLChW = BigInt("1063")
		const tokenAddresss96orfq = accounts[2]
		const _molFeeyWmm2zR = BigInt("917")
		const _molb54ZPwr = accounts[6]
		await contractiLc1RpU.giftLexART.call(tokenAddresss96orfq, tokenIdWMFLChW, communityAddresshOSjHjH, {from: accounts[5]});
		await contractiLc1RpU.updateMolFees.call(_molFeeyWmm2zR, {from: accounts[3]});
		await contractiLc1RpU.updateMol.call(_molb54ZPwr, {from: accounts[2]});

		await expect(contractiLc1RpU.giftLexART.call(tokenAddresss96orfq, tokenIdWMFLChW, communityAddresshOSjHjH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})