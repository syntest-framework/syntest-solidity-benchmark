const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoiniUSEGg7 = await MetaCoin.new({from: accounts[2]});
		const uintfjGkTOu = BigInt("1918")
		const addressRUeFn0j = "0x0000000000000000000000000000000000000001"
		const uintSyhy6ad = BigInt("1320")
		const addressvDxMCJ = accounts[3]
		const uintKyk2a4Z = BigInt("1328")
		const addressGDFFLMO = "0x0000000000000000000000000000000000000001"
		const boolR60c872 = await MetaCoiniUSEGg7.sendCoin.call(addressRUeFn0j, uintfjGkTOu, {from: accounts[1]});
		const booldRAnRDH = await MetaCoiniUSEGg7.sendCoin.call(addressvDxMCJ, uintSyhy6ad, {from: accounts[5]});
		const boolq34TcS0 = await MetaCoiniUSEGg7.sendCoin.call(addressGDFFLMO, uintKyk2a4Z, {from: accounts[3]});

		assert.equal(boolR60c872, false)
		assert.equal(booldRAnRDH, false)
		assert.equal(boolq34TcS0, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinIfngcmc = await MetaCoin.new({from: accounts[5]});
		const uintWizVoHM = BigInt("1572")
		const addressxry4Kp = accounts[5]
		const uintCNmzeZi = BigInt("563")
		const addressucNIKt2 = accounts[2]
		const uintZVod6JM = BigInt("221")
		const addressDEa8TSl = accounts[2]
		const uintlPKt4s5 = BigInt("1708")
		const addressYuGIFM2 = accounts[1]
		const uintYbEdUlL = BigInt("105")
		const addressKREpGQ = accounts[3]
		const uintWHBoLmW = BigInt("158")
		const addressldqyFRq = accounts[1]
		const booleJ1poN2 = await MetaCoinIfngcmc.sendCoin.call(addressxry4Kp, uintWizVoHM, {from: accounts[1]});
		const boolVqRaxSA = await MetaCoinIfngcmc.sendCoin.call(addressucNIKt2, uintCNmzeZi, {from: accounts[5]});
		const boolXGeacTs = await MetaCoinIfngcmc.sendCoin.call(addressDEa8TSl, uintZVod6JM, {from: accounts[4]});
		const boolYRmqOWE = await MetaCoinIfngcmc.sendCoin.call(addressYuGIFM2, uintlPKt4s5, {from: accounts[2]});
		const boolzeBGPTW = await MetaCoinIfngcmc.sendCoin.call(addressKREpGQ, uintYbEdUlL, {from: accounts[3]});
		const boolv5k6vWk = await MetaCoinIfngcmc.sendCoin.call(addressldqyFRq, uintWHBoLmW, {from: accounts[2]});

		assert.equal(boolVqRaxSA, true)
		assert.equal(boolXGeacTs, false)
		assert.equal(boolYRmqOWE, false)
		assert.equal(booleJ1poN2, false)
		assert.equal(boolv5k6vWk, false)
		assert.equal(boolzeBGPTW, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinaa7Ls6Z = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlB3Ra6r = BigInt("67")
		const addressnxMlgBE = accounts[0]
		const uintdzcr5kV = BigInt("1028")
		const addressPXo7KN2 = accounts[0]
		const uintuivmzQp = BigInt("285")
		const addressmjpO7C = accounts[2]
		const booligQyEgw = await MetaCoinaa7Ls6Z.sendCoin.call(addressnxMlgBE, uintlB3Ra6r, {from: accounts[3]});
		const booleNvT3Fz = await MetaCoinaa7Ls6Z.sendCoin.call(addressPXo7KN2, uintdzcr5kV, {from: accounts[0]});
		const boolI2DsnP = await MetaCoinaa7Ls6Z.sendCoin.call(addressmjpO7C, uintuivmzQp, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinpW8APm = await MetaCoin.new({from: accounts[0]});
		const uintZGYd6w = BigInt("868")
		const addressejGbOR = accounts[0]
		const uintIE8Utf = BigInt("42")
		const addressT0Eq5Gy = accounts[3]
		const uintKlbnEWR = BigInt("528")
		const addressnPai7N4 = accounts[4]
		const uinthRHpyGv = BigInt("150")
		const addressrgUwPB = accounts[2]
		const uintGluBbuO = BigInt("840")
		const addressITiDH9x = accounts[4]
		const uint3nq0Uz = BigInt("207")
		const addresspXPbOTU = accounts[3]
		const uintIED3eH7 = BigInt("816")
		const addresssKj0lyy = accounts[4]
		const uintVOJvTKh = BigInt("199")
		const addressxgKAkI1 = accounts[2]
		const uintqMaVX4Y = BigInt("0")
		const addressIuWIcgN = accounts[1]
		const uinttNvPMde = BigInt("421")
		const addressEbG7Xa7 = "0x0000000000000000000000000000000000000001"
		const boolRDg8dly = await MetaCoinpW8APm.sendCoin.call(addressejGbOR, uintZGYd6w, {from: accounts[3]});
		const boolHAxK6Dm = await MetaCoinpW8APm.sendCoin.call(addressT0Eq5Gy, uintIE8Utf, {from: accounts[4]});
		const boolY9lXly = await MetaCoinpW8APm.sendCoin.call(addressnPai7N4, uintKlbnEWR, {from: accounts[0]});
		const boolHtFu9d = await MetaCoinpW8APm.sendCoin.call(addressrgUwPB, uinthRHpyGv, {from: accounts[0]});
		const boolB7WjJti = await MetaCoinpW8APm.sendCoin.call(addressITiDH9x, uintGluBbuO, {from: accounts[1]});
		const boolfDCVNym = await MetaCoinpW8APm.sendCoin.call(addresspXPbOTU, uint3nq0Uz, {from: accounts[1]});
		const boolLSzgMye = await MetaCoinpW8APm.sendCoin.call(addresssKj0lyy, uintIED3eH7, {from: accounts[0]});
		const boolM4LD6zD = await MetaCoinpW8APm.sendCoin.call(addressxgKAkI1, uintVOJvTKh, {from: accounts[3]});
		const boolX3j7F3 = await MetaCoinpW8APm.sendCoin.call(addressIuWIcgN, uintqMaVX4Y, {from: accounts[0]});
		const boolKeZCcJ3 = await MetaCoinpW8APm.sendCoin.call(addressEbG7Xa7, uinttNvPMde, {from: accounts[2]});

		assert.equal(boolB7WjJti, false)
		assert.equal(boolHAxK6Dm, false)
		assert.equal(boolHtFu9d, true)
		assert.equal(boolKeZCcJ3, false)
		assert.equal(boolLSzgMye, true)
		assert.equal(boolM4LD6zD, false)
		assert.equal(boolRDg8dly, false)
		assert.equal(boolX3j7F3, true)
		assert.equal(boolY9lXly, true)
		assert.equal(boolfDCVNym, false)
	});
})