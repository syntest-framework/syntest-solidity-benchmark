const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2PyTXK4D = await DmmControllerV2.new({from: accounts[0]});
		const uintSgZ1eB8 = BigInt("394")
		const uintXEGPap = BigInt("1845")
		const 
keKtpv7 = await DmmControllerV2PyTXK4D.adminWithdrawFunds.call(uintXEGPap, uintSgZ1eB8, {from: accounts[3]});
		await DmmControllerV2PyTXK4D.requireIsFromAssetIntroducer.call({from: accounts[1]});
		await DmmControllerV2PyTXK4D.whenPaused.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressr7xr9Aa = accounts[0]
		const addressOy5gula = accounts[0]
		const addressgWDKU0m = accounts[3]
		const addressLFoaQnI = accounts[3]
		const addressoIWGyDG = accounts[0]
		const addresseymSWbQ = accounts[3]
		const addressWnzsZAP = accounts[4]
		const addressgzmzZ4e = accounts[3]
		const addressWwNLLK3 = accounts[3]
		const uintBEkLWd5 = BigInt("783")
		const uintps4AZmc = BigInt("1988")
		const addresseeL1xyr = accounts[3]
		const DmmControllerV2O5BiIrN = await DmmControllerV2.new(addressr7xr9Aa, addressOy5gula, addressgWDKU0m, addressLFoaQnI, addressoIWGyDG, addresseymSWbQ, addressWnzsZAP, addressgzmzZ4e, addressWwNLLK3, uintBEkLWd5, uintps4AZmc, addresseeL1xyr, {from: accounts[3]});
		const addressBt5J2SK = accounts[0]
		const uintJ5tX1W7 = BigInt("1684")
		const 
efTycxE = await DmmControllerV2O5BiIrN.transferGuardian.call(addressBt5J2SK, {from: accounts[3]});
		const uintarrayPKZm5ns = await DmmControllerV2O5BiIrN.getDmmTokenIds.call({from: accounts[2]});
		const uintJo1AOFN = await DmmControllerV2O5BiIrN.requireIsValidNft.call(uintJ5tX1W7, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssBCPRdp = accounts[0]
		const addressNnA5KmP = accounts[3]
		const addressuBU7dCq = accounts[2]
		const addressOfhyit = accounts[1]
		const addressRuAYxv8 = accounts[4]
		const addresskf4Avo8 = accounts[4]
		const addressHShLDwD = accounts[3]
		const addressO8bF09H = accounts[1]
		const addressHnWgyjh = accounts[2]
		const uintbnGjtda = BigInt("1076")
		const uintNHTVrIV = BigInt("453")
		const addressWAyx9U2 = accounts[0]
		const DmmControllerV2m7C2v5Q = await DmmControllerV2.new(addresssBCPRdp, addressNnA5KmP, addressuBU7dCq, addressOfhyit, addressRuAYxv8, addresskf4Avo8, addressHShLDwD, addressO8bF09H, addressHnWgyjh, uintbnGjtda, uintNHTVrIV, addressWAyx9U2, {from: accounts[2]});
		const uintrBFMJhI = BigInt("908")
		const uintNG1B07a = BigInt("870")
		const addressyiy9Wql = "0x0000000000000000000000000000000000000001"
		const 
JpXgvlG = await DmmControllerV2m7C2v5Q.increaseTotalSupply.call(uintNG1B07a, uintrBFMJhI, {from: accounts[4]});
		await DmmControllerV2m7C2v5Q.whenNotPaused.call({from: accounts[1]});
		const boolCiJ7Pbv = await DmmControllerV2m7C2v5Q.isMarketEnabledByDmmTokenAddress.call(addressyiy9Wql, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressdk5NpoL = accounts[0]
		const addressh7zbKxn = accounts[1]
		const addressn4jX6eF = accounts[2]
		const addressIMdV1FU = "0x0000000000000000000000000000000000000001"
		const addressapOENob = accounts[4]
		const addressJ5pNrT = accounts[1]
		const addressOghWoNC = accounts[4]
		const addresscJZmV17 = accounts[0]
		const addresspD0cCR = accounts[2]
		const uint4AW6GA = BigInt("906")
		const uintxlu8Cg9 = BigInt("1924")
		const addressIMyTHGO = accounts[4]
		const DmmControllerV2wR94On = await DmmControllerV2.new(addressdk5NpoL, addressh7zbKxn, addressn4jX6eF, addressIMdV1FU, addressapOENob, addressJ5pNrT, addressOghWoNC, addresscJZmV17, addresspD0cCR, uint4AW6GA, uintxlu8Cg9, addressIMyTHGO, {from: accounts[1]});
		const uintcUxpEse = BigInt("1193")
		const uintdiwWGVl = BigInt("414")
		await DmmControllerV2wR94On.pause.call({from: accounts[3]});
		const uintcYu0kx = await DmmControllerV2wR94On.setMinCollateralization.call(uintcUxpEse, {from: "0x0000000000000000000000000000000000000001"});
		const uintU1GvLCr = await DmmControllerV2wR94On.requireIsSecondaryMarketNft.call(uintdiwWGVl, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressbfkZlYh = accounts[2]
		const addressW8C0c3r = accounts[0]
		const addresszbRrKTP = accounts[0]
		const addressb4nOwM8 = accounts[0]
		const addresscSXXaWw = accounts[3]
		const addresskE2NXkn = accounts[0]
		const addresssb67fW2 = accounts[0]
		const addressOLdsbDU = accounts[1]
		const addressSzCLsSw = accounts[2]
		const uintATfA9Ci = BigInt("656")
		const uintQsZGzLL = BigInt("1946")
		const addressVuIBoip = accounts[3]
		const DmmControllerV2oGt9fJQ = await DmmControllerV2.new(addressbfkZlYh, addressW8C0c3r, addresszbRrKTP, addressb4nOwM8, addresscSXXaWw, addresskE2NXkn, addresssb67fW2, addressOLdsbDU, addressSzCLsSw, uintATfA9Ci, uintQsZGzLL, addressVuIBoip, {from: accounts[4]});
		const addressZp2PxZv = accounts[4]
		const addressxtFV8tR = await DmmControllerV2oGt9fJQ.transferOwnership.call(addressZp2PxZv, {from: accounts[4]});
		await DmmControllerV2oGt9fJQ.onlyOwner.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressM8bulqV = accounts[1]
		const addressgvQwRnQ = accounts[4]
		const addressoSDN9sk = accounts[2]
		const addressZLwjAYF = accounts[2]
		const addressCoMYWMb = accounts[0]
		const addresshYv56Fz = accounts[1]
		const addressdclavQC = accounts[0]
		const addressjueUAqc = "0x0000000000000000000000000000000000000001"
		const addressqypPiw3 = accounts[2]
		const uintttrrfDV = BigInt("1389")
		const uintnyF7nHy = BigInt("1495")
		const addressxTjept3 = accounts[4]
		const DmmControllerV2ayfehHI = await DmmControllerV2.new(addressM8bulqV, addressgvQwRnQ, addressoSDN9sk, addressZLwjAYF, addressCoMYWMb, addresshYv56Fz, addressdclavQC, addressjueUAqc, addressqypPiw3, uintttrrfDV, uintnyF7nHy, addressxTjept3, {from: accounts[1]});
		const addressnBWEWj0 = accounts[1]
		const addressBYlThtP = accounts[5]
		const uintbwxopJN = BigInt("212")
		const 
ehu20tT = await DmmControllerV2ayfehHI.addMarketFromExistingDmmToken.call(addressBYlThtP, addressnBWEWj0, {from: accounts[1]});
		const uintq6CyqS3 = await DmmControllerV2ayfehHI.requireIsNftOwner.call(uintbwxopJN, {from: accounts[5]});
		await DmmControllerV2ayfehHI.renounceGuardian.call({from: accounts[2]});
		await DmmControllerV2ayfehHI.nonReentrant.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressuI7deMG = accounts[0]
		const addressvHwWSty = accounts[1]
		const addressRbjDBt = accounts[5]
		const addresst64oXk5 = accounts[5]
		const addressI73bIVs = accounts[2]
		const addressDDXXsmn = accounts[1]
		const addressZSG8nlM = accounts[0]
		const addressWkmdTN5 = accounts[3]
		const addressGnf4ysq = "0x0000000000000000000000000000000000000001"
		const uint3jdvUu = BigInt("799")
		const uintp7wmUz = BigInt("539")
		const addressqVEhhNk = accounts[0]
		const DmmControllerV2c2mwvED = await DmmControllerV2.new(addressuI7deMG, addressvHwWSty, addressRbjDBt, addresst64oXk5, addressI73bIVs, addressDDXXsmn, addressZSG8nlM, addressWkmdTN5, addressGnf4ysq, uint3jdvUu, uintp7wmUz, addressqVEhhNk, {from: accounts[3]});
		const uintEI4wlQn = BigInt("393")
		const uintc74PFos = BigInt("377")
		const addressqwhsZM = accounts[3]
		const uintUbZbbR = await DmmControllerV2c2mwvED.getTotalCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
		const uintelGIRsj = await DmmControllerV2c2mwvED.getActiveCollateralization.call({from: accounts[0]});
		const 
MePgvXq = await DmmControllerV2c2mwvED.decreaseTotalSupply.call(uintc74PFos, uintEI4wlQn, {from: accounts[3]});
		const addressflMFjLy = await DmmControllerV2c2mwvED.transferOwnership.call(addressqwhsZM, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRGXULKc = accounts[1]
		const addressF9zBqoQ = accounts[4]
		const addressphpvFzl = accounts[5]
		const addresskZC7qD9 = accounts[1]
		const addresse02jlcx = accounts[4]
		const addressEFgFZF7 = accounts[3]
		const addressHZsxdol = "0x0000000000000000000000000000000000000001"
		const addressqcXB77V = accounts[3]
		const addressOHYkmdm = accounts[1]
		const uintsE9Mxuc = BigInt("1460")
		const uintlFfGPw = BigInt("1864")
		const addressGy46Iht = accounts[3]
		const DmmControllerV2DuG6fJ8 = await DmmControllerV2.new(addressRGXULKc, addressF9zBqoQ, addressphpvFzl, addresskZC7qD9, addresse02jlcx, addressEFgFZF7, addressHZsxdol, addressqcXB77V, addressOHYkmdm, uintsE9Mxuc, uintlFfGPw, addressGy46Iht, {from: accounts[5]});
		const addressllPa4SW = accounts[1]
		const uintQo7qYos = BigInt("88")
		const 
tKscM42 = await DmmControllerV2DuG6fJ8.transferOwnershipToNewController.call(addressllPa4SW, {from: accounts[0]});
		const uintTPPDsXZ = await DmmControllerV2DuG6fJ8.setMinCollateralization.call(uintQo7qYos, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFCVXts = accounts[0]
		const addressfnqrmQQ = accounts[1]
		const addressPcG1rNe = accounts[2]
		const addressRQ3NmXL = "0x0000000000000000000000000000000000000001"
		const addressiE7gR3i = accounts[4]
		const addresszGwpnT3 = accounts[1]
		const addressErVHhk3 = accounts[4]
		const addressQwc7hB = accounts[0]
		const addressix1LmY = accounts[2]
		const uintI4f3hip = BigInt("906")
		const uintmVYOWVS = BigInt("1924")
		const addresszJ59x3l = accounts[4]
		const DmmControllerV2wR94On = await DmmControllerV2.new(addressFCVXts, addressfnqrmQQ, addressPcG1rNe, addressRQ3NmXL, addressiE7gR3i, addresszGwpnT3, addressErVHhk3, addressQwc7hB, addressix1LmY, uintI4f3hip, uintmVYOWVS, addresszJ59x3l, {from: accounts[1]});
		const uintXowtu9I = BigInt("1193")
		const uintc9TXImD = BigInt("414")
		const uintcYu0kx = await DmmControllerV2wR94On.setMinCollateralization.call(uintXowtu9I, {from: "0x0000000000000000000000000000000000000001"});
		const uintU1GvLCr = await DmmControllerV2wR94On.requireIsSecondaryMarketNft.call(uintc9TXImD, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressO6XxEBf = accounts[3]
		const addressbeo6IAd = accounts[1]
		const addressGkWyKl3 = accounts[4]
		const addressU0guE5w = accounts[4]
		const addressbxjy7RH = accounts[1]
		const addressIFxMLB2 = accounts[1]
		const addressK8CgdRn = accounts[2]
		const addressYCsPyfd = accounts[1]
		const addressFouAWp = accounts[2]
		const uintfeycbbZ = BigInt("1382")
		const uintdBIlrJ1 = BigInt("1247")
		const addressSTgYZlQ = accounts[4]
		const DmmControllerV2tkg1AF3 = await DmmControllerV2.new(addressO6XxEBf, addressbeo6IAd, addressGkWyKl3, addressU0guE5w, addressbxjy7RH, addressIFxMLB2, addressK8CgdRn, addressYCsPyfd, addressFouAWp, uintfeycbbZ, uintdBIlrJ1, addressSTgYZlQ, {from: accounts[3]});
		const addressnCtcbOr = accounts[4]
		const addressEOmLn9y = accounts[3]
		const addresseeUKgg = accounts[4]
		const addresstQ5rlcv = accounts[3]
		const addressleXcJ1z = await DmmControllerV2tkg1AF3.getDmmTokenForUnderlying.call(addressnCtcbOr, {from: accounts[0]});
		const boolAcCH75G = await DmmControllerV2tkg1AF3.isMarketEnabledByDmmTokenAddress.call(addressEOmLn9y, {from: accounts[0]});
		const uintLhsrVh = await DmmControllerV2tkg1AF3.getTotalCollateralization.call({from: accounts[0]});
		const uintjmYbaKG = await DmmControllerV2tkg1AF3.getInterestRateByDmmTokenAddress.call(addresseeUKgg, {from: accounts[2]});
		const uintbBSuH96 = await DmmControllerV2tkg1AF3.getExchangeRate.call(addresstQ5rlcv, {from: accounts[3]});
	});
})