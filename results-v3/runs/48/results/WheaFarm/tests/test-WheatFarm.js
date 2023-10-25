const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringUxvOwq0 = "xrr54q9yEa66XCm3HEJBOg0fUJEsZV9wMRcgA1K4DzZqs74Wjsr961C2"
		const stringP5Ikq02 = "NqM18hkORe9kWK4uquoh1QCFAfBU9enJfYGNlCwsuYQ5lBOkxV9xDMTlECq26WirKhA7lmoS2voWFNSYTOOPimgtJngMOX"
		const uinttVUYKG8 = BigInt("606")
		const WheatFarmsB5nSCt = await WheatFarm.new(stringUxvOwq0, stringP5Ikq02, uinttVUYKG8, {from: accounts[1]});
		const uintALW8bVZ = BigInt("1344")
		const addressM8QXweG = accounts[3]
		const addressNNRfZlR = accounts[4]
		const uintPLLeVM = BigInt("1266")
		const address5MkPSv = accounts[3]
		const addressOkKHiOD = accounts[1]
		const boolyV0Z23b = await WheatFarmsB5nSCt.transferFrom.call(addressNNRfZlR, addressM8QXweG, uintALW8bVZ, {from: accounts[1]});
		const uintuxlRpZd = await WheatFarmsB5nSCt.totalSupply.call({from: accounts[2]});
		const uintQVuStFM = await WheatFarmsB5nSCt.totalSupply.call({from: accounts[2]});
		const boolIIEFJKq = await WheatFarmsB5nSCt.increaseAllowance.call(address5MkPSv, uintPLLeVM, {from: accounts[0]});
		const boolcD4Fyxj = await WheatFarmsB5nSCt.transferownership.call(addressOkKHiOD, {from: accounts[5]});

		await expect(WheatFarmsB5nSCt.transferFrom.call(addressNNRfZlR, addressM8QXweG, uintALW8bVZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnDrV6zn = "awm7Og697ubWu29lR7NB4fAEeCCrKv9dfI8WYjsm9WYHg7JydNnkdRhqx"
		const stringngdZP9d = "7dtEK9hGaRJqEeVRwLEDCVJ1jWylr7MSfCGT6uro1IQBudBMKt2U"
		const uintsyu5nrB = BigInt("135")
		const WheatFarmSyvbVW3 = await WheatFarm.new(stringnDrV6zn, stringngdZP9d, uintsyu5nrB, {from: accounts[2]});
		const uintuTkGuGX = BigInt("1697")
		const addressvzdPI3M = accounts[3]
		const uintRAk2UAp = BigInt("1937")
		const addressMnTBFbJ = "0x0000000000000000000000000000000000000001"
		const addressKDnssuc = "0x0000000000000000000000000000000000000001"
		const boolD7cEkF3 = await WheatFarmSyvbVW3.transfer.call(addressvzdPI3M, uintuTkGuGX, {from: accounts[3]});
		const boolohySVET = await WheatFarmSyvbVW3.increaseAllowance.call(addressMnTBFbJ, uintRAk2UAp, {from: accounts[0]});
		const uintxuvQ0U9 = await WheatFarmSyvbVW3.balanceOf.call(addressKDnssuc, {from: "0x0000000000000000000000000000000000000001"});
		const stringH7ZVYy9 = await WheatFarmSyvbVW3.symbol.call({from: accounts[1]});

		await expect(WheatFarmSyvbVW3.transfer.call(addressvzdPI3M, uintuTkGuGX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCi9wD24 = "67YnuKqdx6oBj8Pns5eCl2thfa5Er4DfvSob6KmdFHGU3ED5V1IJWRbfihJprpi5OMUvt7"
		const stringxntQu7 = "uhd0y7NA45lT"
		const uintVwpa0qj = BigInt("1853")
		const WheatFarmg2Up7U = await WheatFarm.new(stringCi9wD24, stringxntQu7, uintVwpa0qj, {from: accounts[3]});
		const uintdQ86mbQ = BigInt("273")
		const addressX4we1kj = accounts[1]
		const uintVVhyPag = BigInt("1925")
		const addressu4hhZcp = accounts[3]
		const uintij7EsRi = BigInt("209")
		const addressy5hlUC = accounts[4]
		const addressMqJ2vDD = accounts[0]
		const boolhlCx2Uo = await WheatFarmg2Up7U.decreaseAllowance.call(addressX4we1kj, uintdQ86mbQ, {from: accounts[1]});
		const stringgIW4ru1 = await WheatFarmg2Up7U.name.call({from: accounts[3]});
		const uint8Srw0Fb0 = await WheatFarmg2Up7U.decimals.call({from: accounts[4]});
		const uint8dIiiAL0 = await WheatFarmg2Up7U.decimals.call({from: accounts[1]});
		const booldL4xiRR = await WheatFarmg2Up7U.transfer.call(addressu4hhZcp, uintVVhyPag, {from: accounts[4]});
		const boolXWdQmdD = await WheatFarmg2Up7U.transferFrom.call(addressMqJ2vDD, addressy5hlUC, uintij7EsRi, {from: accounts[3]});

		await expect(WheatFarmg2Up7U.decreaseAllowance.call(addressX4we1kj, uintdQ86mbQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCb85qFZ = "b8D5emSdGZSdxtYz7sFYGD5vB1rpkOov"
		const stringdkeZJUA = "9mX5dVir5xiD3qYniOPySygsm9pvC1NIPsOlcrliPWTy"
		const uintskRkakX = BigInt("945")
		const WheatFarmQ5SObES = await WheatFarm.new(stringCb85qFZ, stringdkeZJUA, uintskRkakX, {from: accounts[2]});
		const addressHbZMi4y = accounts[0]
		const uintbV3TIo0 = BigInt("1369")
		const addressVdM8WRG = accounts[3]
		const uintKV6HCw = BigInt("1849")
		const addressx4NGJ17 = accounts[4]
		const addressMS8yYQ = accounts[2]
		const addressNvoNlOD = accounts[0]
		const uintW8Nkj6O = await WheatFarmQ5SObES.balanceOf.call(addressHbZMi4y, {from: accounts[5]});
		const stringUFDf5UJ = await WheatFarmQ5SObES.name.call({from: accounts[3]});
		const boolS1nbwrU = await WheatFarmQ5SObES.approveAndCall.call(addressVdM8WRG, uintbV3TIo0, {from: accounts[2]});
		const boolHV1lRJN = await WheatFarmQ5SObES.transferFrom.call(addressMS8yYQ, addressx4NGJ17, uintKV6HCw, {from: accounts[1]});
		const boolRuSHauE = await WheatFarmQ5SObES.transferownership.call(addressNvoNlOD, {from: accounts[1]});

		assert.equal(boolS1nbwrU, true)
		assert.equal(stringUFDf5UJ, "b8D5emSdGZSdxtYz7sFYGD5vB1rpkOov")
		assert.equal(uintW8Nkj6O, BigInt("0"))
		await expect(WheatFarmQ5SObES.transferFrom.call(addressMS8yYQ, addressx4NGJ17, uintKV6HCw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqsKi68 = "Yy"
		const stringHdQpA60 = "UCxE5bvYp10POmSUOzbUTpodo1pnSJgVLVmCHMSxJBiUQ8DWlcfJ2FzXENDt5ufyWVFcR4kUOefq7zPF72kaDRRM"
		const uintV4BxvbZ = BigInt("190")
		const WheatFarmf4hkdm = await WheatFarm.new(stringqsKi68, stringHdQpA60, uintV4BxvbZ, {from: accounts[2]});
		const uintokFWakC = BigInt("260")
		const addressapWpybf = "0x0000000000000000000000000000000000000001"
		const uintm7SvJP0 = BigInt("1225")
		const address5EQ3ZF = accounts[2]
		const addressNxexpkR = accounts[2]
		const boolCB8WQ9Z = await WheatFarmf4hkdm.transfer.call(addressapWpybf, uintokFWakC, {from: accounts[2]});
		const boolFxOY5Hw = await WheatFarmf4hkdm.transferFrom.call(addressNxexpkR, address5EQ3ZF, uintm7SvJP0, {from: accounts[5]});
		const stringRBu8dkH = await WheatFarmf4hkdm.name.call({from: accounts[4]});

		assert.equal(boolCB8WQ9Z, true)
		await expect(WheatFarmf4hkdm.transferFrom.call(addressNxexpkR, address5EQ3ZF, uintm7SvJP0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrXai5Y6 = "t5mOhxki8GJmjX49tfMDfkhGxXQ9rvSoMoNgO8Vntp1Oa"
		const stringNOWPfw8 = "oPpcdKrGCl2lHDP"
		const uinti0VUjm8 = BigInt("59")
		const WheatFarmREk7U2W = await WheatFarm.new(stringrXai5Y6, stringNOWPfw8, uinti0VUjm8, {from: accounts[3]});
		const uintoUxWvQU = BigInt("243")
		const addressbL5I7s3 = "0x0000000000000000000000000000000000000001"
		const uintuzVn9br = BigInt("733")
		const addressJ2gxoSh = accounts[3]
		const uinteys9AG8 = BigInt("1995")
		const addressT0jFQc8 = accounts[0]
		const addressp3al5sz = accounts[0]
		const boolrkaLXxb = await WheatFarmREk7U2W.transfer.call(addressbL5I7s3, uintoUxWvQU, {from: accounts[3]});
		const boolvLy5Hwq = await WheatFarmREk7U2W.approve.call(addressJ2gxoSh, uintuzVn9br, {from: "0x0000000000000000000000000000000000000001"});
		const boolv9PD6nK = await WheatFarmREk7U2W.transferFrom.call(addressp3al5sz, addressT0jFQc8, uinteys9AG8, {from: accounts[3]});
		const stringwtpebF3 = await WheatFarmREk7U2W.symbol.call({from: accounts[0]});

		assert.equal(boolrkaLXxb, true)
		assert.equal(boolvLy5Hwq, true)
		await expect(WheatFarmREk7U2W.transferFrom.call(addressp3al5sz, addressT0jFQc8, uinteys9AG8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuVt7qQI = "saqbAJW7wZWmn1IPPEQjfsXMBjETgm4EBVWYDAq6QFsor0k9gjhYwiR4hdxQJk8QQz1GNGG7zzxS"
		const stringjHxw6Sy = "rCKs"
		const uintvM9gdOu = BigInt("1126")
		const WheatFarmQGirZbL = await WheatFarm.new(stringuVt7qQI, stringjHxw6Sy, uintvM9gdOu, {from: accounts[4]});
		const addressEWGvler = accounts[1]
		const uinticlyCAl = BigInt("357")
		const addressJcAo3Ls = accounts[3]
		const booldTun54X = await WheatFarmQGirZbL.transferownership.call(addressEWGvler, {from: accounts[3]});
		const stringSHlaeB8 = await WheatFarmQGirZbL.name.call({from: accounts[5]});
		const booluR9cHI = await WheatFarmQGirZbL.increaseAllowance.call(addressJcAo3Ls, uinticlyCAl, {from: "0x0000000000000000000000000000000000000001"});
		const stringzFlciQ4 = await WheatFarmQGirZbL.symbol.call({from: accounts[0]});

		await expect(WheatFarmQGirZbL.transferownership.call(addressEWGvler, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzY4c0d5 = "ou9wKh1D7dPTeVB9G1nGJACtSB03LpXM1OyGPTTi6lTooeQpndkdq9FfPuA3ncehSog3emTleqSjt7kpbSfPDCE"
		const stringBHGkS3U = "4yJ1rjNE1O856EoNylTMLF1Dz1EzKBxWNV4zkIscTMo4hzQ7P0Y3bnVsjdCKO4pn68jNk"
		const uintwmC2tc5 = BigInt("63")
		const WheatFarmSWhAvG0 = await WheatFarm.new(stringzY4c0d5, stringBHGkS3U, uintwmC2tc5, {from: "0x0000000000000000000000000000000000000001"});
		const addressoujaMzc = accounts[4]
		const addressPWrsbdc = accounts[0]
		const addressyiNFGJQ = accounts[3]
		const uintSFxw79S = await WheatFarmSWhAvG0.allowance.call(addressPWrsbdc, addressoujaMzc, {from: accounts[3]});
		const uintSkssYiz = await WheatFarmSWhAvG0.balanceOf.call(addressyiNFGJQ, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringuVt7qQI = "saqbAJW7wZWmn1IPPEQjfsXMBjETgm4EBVWYDAq6QFsor0k9gjhYwiR4hdxQJk8QQz1GNGG7zzxS"
		const stringjHxw6Sy = "rCKs"
		const uintAHUJeRQ = BigInt("1126")
		const WheatFarmQGirZbL = await WheatFarm.new(stringuVt7qQI, stringjHxw6Sy, uintAHUJeRQ, {from: accounts[4]});
		const addressopSFScM = accounts[3]
		const addressadMK1j6 = accounts[1]
		const uintzY3v0JT = BigInt("209")
		const addressTtU5DeW = accounts[2]
		const addressIECxtfu = accounts[2]
		const boolzuALHhP = await WheatFarmQGirZbL.transferownership.call(addressopSFScM, {from: accounts[4]});
		const booldTun54X = await WheatFarmQGirZbL.transferownership.call(addressadMK1j6, {from: accounts[3]});
		const stringAnCnIRr = await WheatFarmQGirZbL.name.call({from: accounts[0]});
		const boolUvBpvyr = await WheatFarmQGirZbL.transferFrom.call(addressIECxtfu, addressTtU5DeW, uintzY3v0JT, {from: accounts[4]});

		assert.equal(boolzuALHhP, true)
		await expect(WheatFarmQGirZbL.transferownership.call(addressadMK1j6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrXai5Y6 = "t5mOhxki8GJmjX49tfMDfkhGxXQ9rvSoMoNgO8Vntp1Oa"
		const stringNOWPfw8 = "oPpcdKrGCl2lHDP"
		const uinteAPHmC = BigInt("59")
		const WheatFarmREk7U2W = await WheatFarm.new(stringrXai5Y6, stringNOWPfw8, uinteAPHmC, {from: accounts[3]});
		const uintGEUGmAZ = BigInt("13")
		const addressqNdyHeC = "0x00000000000000000000000000000000000000-1"
		const uintx7ZeBTG = BigInt("612")
		const addressd3C8bYn = accounts[4]
		const boolpWSRnuA = await WheatFarmREk7U2W.transfer.call(addressqNdyHeC, uintGEUGmAZ, {from: accounts[5]});
		const boolveqHMR = await WheatFarmREk7U2W.approveAndCall.call(addressd3C8bYn, uintx7ZeBTG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmREk7U2W.transfer.call(addressqNdyHeC, uintGEUGmAZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrXai5Y6 = "t5mOhxki8GJmjX49tfMDfkhGxXQ9rvSoMoNgO8Vntp1Oa"
		const stringNOWPfw8 = "oPpcdKrGCl2lHDP"
		const uintEN0A7N9 = BigInt("59")
		const WheatFarmREk7U2W = await WheatFarm.new(stringrXai5Y6, stringNOWPfw8, uintEN0A7N9, {from: accounts[3]});
		const uintomGQTGQ = BigInt("0")
		const addressDnHPH8P = "0x0000000000000000000000000000000000000000"
		const addressR7vGp6S = accounts[4]
		const addressg9HPxpB = accounts[4]
		const boolpWSRnuA = await WheatFarmREk7U2W.transfer.call(addressDnHPH8P, uintomGQTGQ, {from: accounts[5]});
		const uintxxpg2nG = await WheatFarmREk7U2W.allowance.call(addressg9HPxpB, addressR7vGp6S, {from: accounts[1]});

		assert.equal(boolpWSRnuA, true)
		assert.equal(uintxxpg2nG, BigInt("0"))
	});
})