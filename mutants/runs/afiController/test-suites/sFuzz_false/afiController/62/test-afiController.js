const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressUCvlSzY = accounts[5]
		const afiControllerGCU7pRd = await afiController.new(addressUCvlSzY, {from: accounts[4]});
		const address3y9y8W = accounts[0]
		const addressJw27In = accounts[4]
		const addressCvHTrar = accounts[4]
		const uintbw4kk9n = BigInt("1662")
		const addressrpAaNA = accounts[2]
		const addresszxiEBz4 = accounts[2]
		const addressSd0Xac = accounts[3]
		const addressOu50RSz = accounts[3]
		const addressIiw8AvF = accounts[4]
		const addressiXSrChU = accounts[2]
		const addresshCXoofK = accounts[5]
		const addressaOyZ03U = accounts[5]
		const addresscXJnqEM = accounts[0]
		const addressBc1KI5e = accounts[5]
		const addressWENrOQV = await afiControllerGCU7pRd.setGovernance.call(address3y9y8W, {from: accounts[2]});
		const addressId9kmac = await afiControllerGCU7pRd.revokeStrategy.call(addressCvHTrar, addressJw27In, {from: accounts[2]});
		const uintPmqmg4x = await afiControllerGCU7pRd.getExpectedReturn.call(addresszxiEBz4, addressrpAaNA, uintbw4kk9n, {from: accounts[4]});
		const addressqW3XEt = await afiControllerGCU7pRd.setConverter.call(addressIiw8AvF, addressOu50RSz, addressSd0Xac, {from: accounts[2]});
		const addressXxdQLU6 = await afiControllerGCU7pRd.setConverter.call(addressaOyZ03U, addresshCXoofK, addressiXSrChU, {from: accounts[1]});
		const addressCoI7lks = await afiControllerGCU7pRd.approveStrategy.call(addressBc1KI5e, addresscXJnqEM, {from: accounts[1]});

		await expect(afiControllerGCU7pRd.setGovernance.call(address3y9y8W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxB0xSr = accounts[5]
		const afiControllerMycrlyh = await afiController.new(addressxB0xSr, {from: accounts[2]});
		const addresswuZSP45 = "0x0000000000000000000000000000000000000001"
		const addressID55Yix = accounts[2]
		const addressk5zMHi = accounts[0]
		const addressvtouhOw = accounts[2]
		const addressQbnK0D2 = accounts[1]
		const addressIf14iNS = accounts[1]
		const uintQ7y9fH = BigInt("1482")
		const addressnyWRWF1 = accounts[0]
		const addresspARHvIG = await afiControllerMycrlyh.setOneSplit.call(addresswuZSP45, {from: accounts[0]});
		const uintuJOtonH = await afiControllerMycrlyh.balanceOf.call(addressID55Yix, {from: accounts[2]});
		const addressSmyPtHQ = await afiControllerMycrlyh.withdrawAll.call(addressk5zMHi, {from: accounts[4]});
		const addressSRbv7Ee = await afiControllerMycrlyh.setStrategy.call(addressQbnK0D2, addressvtouhOw, {from: accounts[4]});
		const uintinF2JbT = await afiControllerMycrlyh.balanceOf.call(addressIf14iNS, {from: accounts[2]});
		const addressv9rrY9 = await afiControllerMycrlyh.withdraw.call(addressnyWRWF1, uintQ7y9fH, {from: accounts[4]});

		await expect(afiControllerMycrlyh.setOneSplit.call(addresswuZSP45, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address9AjHg8 = accounts[4]
		const afiControllertJ7KZbU = await afiController.new(address9AjHg8, {from: accounts[2]});
		const addressyFqP8PY = accounts[3]
		const addressOdU9VhH = accounts[4]
		const addresswTm0sxC = await afiControllertJ7KZbU.withdrawAll.call(addressyFqP8PY, {from: accounts[4]});
		const addressRQABJi = await afiControllertJ7KZbU.setGovernance.call(addressOdU9VhH, {from: accounts[4]});

		await expect(afiControllertJ7KZbU.withdrawAll.call(addressyFqP8PY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCZBaNP5 = "0x0000000000000000000000000000000000000001"
		const afiControllerPFml7ZD = await afiController.new(addressCZBaNP5, {from: accounts[3]});
		const uintw1f4MUm = BigInt("114")
		const addresswlJh5Tz = accounts[3]
		const addressEpNvzoV = accounts[2]
		const addressTzlNodO = accounts[3]
		const addressHnK8wjB = accounts[1]
		const uintWZtjUX = await afiControllerPFml7ZD.getExpectedReturn.call(addressEpNvzoV, addresswlJh5Tz, uintw1f4MUm, {from: accounts[0]});
		const addressWQ4TsTj = await afiControllerPFml7ZD.setVault.call(addressHnK8wjB, addressTzlNodO, {from: accounts[1]});

		await expect(afiControllerPFml7ZD.getExpectedReturn.call(addressEpNvzoV, addresswlJh5Tz, uintw1f4MUm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressL89fJp8 = accounts[1]
		const afiControllere1xZeEu = await afiController.new(addressL89fJp8, {from: accounts[0]});
		const addressEwfLwb = accounts[2]
		const addressXMWAPUS = accounts[5]
		const addressszPN3kc = accounts[1]
		const uintAu9u1Wj = BigInt("225")
		const addressLivvsu5 = accounts[2]
		const addresse3YI08B = accounts[1]
		const addresskXvjptl = accounts[3]
		const addressVKWRI86 = accounts[2]
		const addressOyQFtSL = accounts[1]
		const uintASKtwav = await afiControllere1xZeEu.balanceOf.call(addressEwfLwb, {from: accounts[3]});
		const addressIhrKt0D = await afiControllere1xZeEu.inCaseStrategyTokenGetStuck.call(addressszPN3kc, addressXMWAPUS, {from: accounts[3]});
		const addressxdKDT6w = await afiControllere1xZeEu.yearn.call(addresse3YI08B, addressLivvsu5, uintAu9u1Wj, {from: accounts[3]});
		const addresstxg6StT = await afiControllere1xZeEu.setConverter.call(addressOyQFtSL, addressVKWRI86, addresskXvjptl, {from: accounts[5]});

		await expect(afiControllere1xZeEu.balanceOf.call(addressEwfLwb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfMa0zHY = accounts[2]
		const afiControllerK53zhR6 = await afiController.new(addressfMa0zHY, {from: accounts[2]});
		const addressbPYGk4X = accounts[2]
		const addressB1zFOpH = accounts[3]
		const addressCitAHYR = accounts[5]
		const addressCEE30vk = accounts[3]
		const addressWiMZrnp = accounts[0]
		const addressITqHGdI = accounts[3]
		const addressm0uhMMk = await afiControllerK53zhR6.setConverter.call(addressCitAHYR, addressB1zFOpH, addressbPYGk4X, {from: accounts[0]});
		const addressVlMMDGC = await afiControllerK53zhR6.setStrategy.call(addressWiMZrnp, addressCEE30vk, {from: accounts[0]});
		const addressYkngSyy = await afiControllerK53zhR6.setStrategist.call(addressITqHGdI, {from: accounts[1]});

		await expect(afiControllerK53zhR6.setConverter.call(addressCitAHYR, addressB1zFOpH, addressbPYGk4X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshgctSkJ = accounts[4]
		const afiControllerXJM38OB = await afiController.new(addresshgctSkJ, {from: accounts[1]});
		const uintoOUcMBJ = BigInt("867")
		const addressnevlFhy = accounts[4]
		const addressQx7ctdC = accounts[2]
		const addresss0QFcav = accounts[2]
		const addressDQI2MSD = accounts[4]
		const addressZGwvW01 = accounts[4]
		const addressethxO4l = accounts[3]
		const addressJvWIUW = accounts[0]
		const addressxuBndL = await afiControllerXJM38OB.inCaseTokensGetStuck.call(addressnevlFhy, uintoOUcMBJ, {from: accounts[4]});
		const addressuVCZvxh = await afiControllerXJM38OB.inCaseStrategyTokenGetStuck.call(addresss0QFcav, addressQx7ctdC, {from: accounts[4]});
		const addresspB0Qo6M = await afiControllerXJM38OB.setOneSplit.call(addressDQI2MSD, {from: accounts[1]});
		const addressL6tonia = await afiControllerXJM38OB.withdrawAll.call(addressZGwvW01, {from: "0x0000000000000000000000000000000000000001"});
		const addressAGBC4k = await afiControllerXJM38OB.approveStrategy.call(addressJvWIUW, addressethxO4l, {from: accounts[0]});

		await expect(afiControllerXJM38OB.inCaseTokensGetStuck.call(addressnevlFhy, uintoOUcMBJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaVsEBa = "0x0000000000000000000000000000000000000001"
		const afiControllerEydyga = await afiController.new(addressaVsEBa, {from: accounts[2]});
		const addressyr9UxX0 = accounts[4]
		const addressHxRfFse = accounts[4]
		const uintniCzn64 = BigInt("460")
		const addressgltHuB7 = accounts[4]
		const addressopl8VFv = accounts[3]
		const addressLoLhxHE = accounts[5]
		const addressPAKwqQC = accounts[2]
		const addressuCVGOX0 = accounts[4]
		const addressCRnQDZ = accounts[3]
		const uintAkCtPbv = BigInt("1732")
		const addressUZcRkvP = accounts[1]
		const addressqNf6dF4 = accounts[2]
		const uintMO2fI9 = BigInt("1116")
		const addressxKI9aQP = accounts[1]
		const addressYjVwjgd = accounts[1]
		const addressi7BKqBd = await afiControllerEydyga.setVault.call(addressHxRfFse, addressyr9UxX0, {from: accounts[5]});
		const addressQLS19z = await afiControllerEydyga.yearn.call(addressopl8VFv, addressgltHuB7, uintniCzn64, {from: accounts[5]});
		const addressKmH3KV = await afiControllerEydyga.approveStrategy.call(addressPAKwqQC, addressLoLhxHE, {from: accounts[3]});
		const addressgh9vcJX = await afiControllerEydyga.inCaseStrategyTokenGetStuck.call(addressCRnQDZ, addressuCVGOX0, {from: accounts[3]});
		const uintZtuV0jo = await afiControllerEydyga.getExpectedReturn.call(addressqNf6dF4, addressUZcRkvP, uintAkCtPbv, {from: accounts[4]});
		const uintrt5zMZA = await afiControllerEydyga.getExpectedReturn.call(addressYjVwjgd, addressxKI9aQP, uintMO2fI9, {from: accounts[1]});

		await expect(afiControllerEydyga.setVault.call(addressHxRfFse, addressyr9UxX0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresst9mX2HA = accounts[1]
		const afiControllerEtmeE5O = await afiController.new(addresst9mX2HA, {from: accounts[5]});
		const uintnEGmLXQ = BigInt("1429")
		const addressp5lDmWw = accounts[3]
		const addressnA1cd4y = "0x0000000000000000000000000000000000000001"
		const addresspVVBLR2 = accounts[2]
		const addressLP5zGh = accounts[1]
		const addressA5c0ONl = accounts[2]
		const addressCZIbySc = await afiControllerEtmeE5O.earn.call(addressp5lDmWw, uintnEGmLXQ, {from: accounts[0]});
		const addressAtTgdy4 = await afiControllerEtmeE5O.inCaseStrategyTokenGetStuck.call(addresspVVBLR2, addressnA1cd4y, {from: accounts[3]});
		const addresszFHFT7Q = await afiControllerEtmeE5O.approveStrategy.call(addressA5c0ONl, addressLP5zGh, {from: accounts[0]});

		await expect(afiControllerEtmeE5O.earn.call(addressp5lDmWw, uintnEGmLXQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIEVJWCS = accounts[2]
		const afiControllerfJjeyHz = await afiController.new(addressIEVJWCS, {from: accounts[0]});
		const addressBNsTDGB = accounts[2]
		const addressRRdmEP6 = accounts[4]
		const addressS9k2xcS = accounts[1]
		const addresshorFnsj = await afiControllerfJjeyHz.approveStrategy.call(addressRRdmEP6, addressBNsTDGB, {from: accounts[4]});
		const addressOWZ0xa4 = await afiControllerfJjeyHz.setGovernance.call(addressS9k2xcS, {from: accounts[5]});

		await expect(afiControllerfJjeyHz.approveStrategy.call(addressRRdmEP6, addressBNsTDGB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressa1aVc76 = accounts[4]
		const afiControllertJ7KZbU = await afiController.new(addressa1aVc76, {from: accounts[2]});
		const uintambMuYu = BigInt("1023")
		const uintM40GYjp = BigInt("378")
		const addressKaA4f35 = accounts[1]
		const addressXeNAvnX = accounts[2]
		const uintCQE27rQ = BigInt("822")
		const addressKTd3eIw = accounts[3]
		const uintbSNQaVj = await afiControllertJ7KZbU.setSplit.call(uintambMuYu, {from: "0x0000000000000000000000000000000000000001"});
		const addressmGLRfF9 = await afiControllertJ7KZbU.inCaseTokensGetStuck.call(addressKaA4f35, uintM40GYjp, {from: accounts[5]});
		const addressRQABJi = await afiControllertJ7KZbU.setGovernance.call(addressXeNAvnX, {from: accounts[4]});
		const addressJbsBJNd = await afiControllertJ7KZbU.inCaseTokensGetStuck.call(addressKTd3eIw, uintCQE27rQ, {from: accounts[2]});

		await expect(afiControllertJ7KZbU.setSplit.call(uintambMuYu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVhrePiD = accounts[3]
		const afiControllerMPPLZxe = await afiController.new(addressVhrePiD, {from: accounts[4]});
		const addressKRB6QCE = accounts[3]
		const addressYiq476L = accounts[4]
		const addressdKpuwBr = "0x0000000000000000000000000000000000000001"
		const addressaFIT96w = accounts[4]
		const addressT0LTn0 = await afiControllerMPPLZxe.setRewards.call(addressKRB6QCE, {from: accounts[0]});
		const addressWpPdloY = await afiControllerMPPLZxe.revokeStrategy.call(addressdKpuwBr, addressYiq476L, {from: "0x0000000000000000000000000000000000000001"});
		const uintKZNcaVj = await afiControllerMPPLZxe.balanceOf.call(addressaFIT96w, {from: accounts[4]});

		await expect(afiControllerMPPLZxe.setRewards.call(addressKRB6QCE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNeG2qTC = accounts[0]
		const afiControllerhDyxa9l = await afiController.new(addressNeG2qTC, {from: accounts[1]});
		const uintnpGB5Eo = BigInt("757")
		const addressZuFDLS = "0x0000000000000000000000000000000000000001"
		const addressiVuDKdp = accounts[3]
		const addresszH6OQlG = accounts[1]
		const addresssxjqPLe = await afiControllerhDyxa9l.yearn.call(addressiVuDKdp, addressZuFDLS, uintnpGB5Eo, {from: accounts[4]});
		const addressEx4y5C = await afiControllerhDyxa9l.setStrategist.call(addresszH6OQlG, {from: accounts[3]});

		await expect(afiControllerhDyxa9l.yearn.call(addressiVuDKdp, addressZuFDLS, uintnpGB5Eo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressu2kht0y = accounts[0]
		const afiControllerhDyxa9l = await afiController.new(addressu2kht0y, {from: accounts[1]});
		const addressHzg9UeW = accounts[1]
		const addressEx4y5C = await afiControllerhDyxa9l.setStrategist.call(addressHzg9UeW, {from: accounts[3]});

		await expect(afiControllerhDyxa9l.setStrategist.call(addressHzg9UeW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslVVxjS = accounts[0]
		const afiControllerhDyxa9l = await afiController.new(addresslVVxjS, {from: accounts[1]});
		const uintwW33MyU = BigInt("1399")
		const addressC8VmgMC = accounts[3]
		const addressN0CgWc = accounts[2]
		const addresskXveFf = await afiControllerhDyxa9l.withdraw.call(addressC8VmgMC, uintwW33MyU, {from: "0x0000000000000000000000000000000000000001"});
		const addressEx4y5C = await afiControllerhDyxa9l.setStrategist.call(addressN0CgWc, {from: accounts[3]});

		await expect(afiControllerhDyxa9l.withdraw.call(addressC8VmgMC, uintwW33MyU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshHXekPq = accounts[4]
		const afiControllertJ7KZbU = await afiController.new(addresshHXekPq, {from: accounts[2]});
		const addressWnLPRC = accounts[5]
		const addressLrOMY27 = accounts[2]
		const addressaZkSWV8 = accounts[5]
		const addresslw6kjw2 = await afiControllertJ7KZbU.inCaseStrategyTokenGetStuck.call(addressLrOMY27, addressWnLPRC, {from: "0x0000000000000000000000000000000000000001"});
		const addressRQABJi = await afiControllertJ7KZbU.setGovernance.call(addressaZkSWV8, {from: accounts[4]});

		await expect(afiControllertJ7KZbU.inCaseStrategyTokenGetStuck.call(addressLrOMY27, addressWnLPRC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressw5HcTB = accounts[4]
		const afiControllertJ7KZbU = await afiController.new(addressw5HcTB, {from: accounts[2]});
		const addressN8T445U = accounts[1]
		const addressXQjBX4h = accounts[0]
		const addressLrqWzFF = accounts[6]
		const addresshA8ACn = await afiControllertJ7KZbU.revokeStrategy.call(addressXQjBX4h, addressN8T445U, {from: accounts[1]});
		const addressRQABJi = await afiControllertJ7KZbU.setGovernance.call(addressLrqWzFF, {from: accounts[4]});

		await expect(afiControllertJ7KZbU.revokeStrategy.call(addressXQjBX4h, addressN8T445U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshSZ76fb = accounts[0]
		const afiControllerhDyxa9l = await afiController.new(addresshSZ76fb, {from: accounts[1]});
		const address7wa1ad = accounts[2]
		const addressxEOrW1Y = accounts[4]
		const uintOhKmlLF = BigInt("1323")
		const addressknvSVF4 = accounts[2]
		const uintMPABKw4 = BigInt("334")
		const addressrvFYg8E = accounts[3]
		const addressrvykTll = accounts[0]
		const addressB1xj78 = accounts[1]
		const addressku73AWt = await afiControllerhDyxa9l.setStrategy.call(addressxEOrW1Y, address7wa1ad, {from: accounts[0]});
		const addressSAiXX35 = await afiControllerhDyxa9l.earn.call(addressknvSVF4, uintOhKmlLF, {from: "0x0000000000000000000000000000000000000001"});
		const uintdkgoP1K = await afiControllerhDyxa9l.setSplit.call(uintMPABKw4, {from: accounts[2]});
		const addressKCiXZO2 = await afiControllerhDyxa9l.revokeStrategy.call(addressrvykTll, addressrvFYg8E, {from: accounts[1]});
		const addressEx4y5C = await afiControllerhDyxa9l.setStrategist.call(addressB1xj78, {from: accounts[3]});

		await expect(afiControllerhDyxa9l.setStrategy.call(addressxEOrW1Y, address7wa1ad, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfMq43Ga = accounts[1]
		const afiControlleraiYWCpV = await afiController.new(addressfMq43Ga, {from: accounts[1]});
		const addressxACLsEf = accounts[2]
		const addressxJpAWA9 = accounts[1]
		const uintZBeXHWi = BigInt("1260")
		const addressI0xT1fG = accounts[4]
		const addressCpsee2Q = accounts[0]
		const uintLWjLKZ = BigInt("1786")
		const addressHBv6DXL = accounts[4]
		const uintcs6l6yI = BigInt("68")
		const addressCKzsBPP = "0x0000000000000000000000000000000000000001"
		const addressv45ZOQZ = await afiControlleraiYWCpV.setStrategy.call(addressxJpAWA9, addressxACLsEf, {from: accounts[1]});
		const uintRquQgdx = await afiControlleraiYWCpV.getExpectedReturn.call(addressCpsee2Q, addressI0xT1fG, uintZBeXHWi, {from: accounts[0]});
		const addressKpr1Lsv = await afiControlleraiYWCpV.earn.call(addressHBv6DXL, uintLWjLKZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressemOJgdC = await afiControlleraiYWCpV.inCaseTokensGetStuck.call(addressCKzsBPP, uintcs6l6yI, {from: accounts[5]});

		await expect(afiControlleraiYWCpV.setStrategy.call(addressxJpAWA9, addressxACLsEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfFpH2qp = accounts[4]
		const afiControllertJ7KZbU = await afiController.new(addressfFpH2qp, {from: accounts[2]});
		const uintOv4RiHA = BigInt("258")
		const addressHiQ1Vr = accounts[1]
		const addressGDQLwkp = accounts[6]
		const addresspRHiaVW = await afiControllertJ7KZbU.inCaseTokensGetStuck.call(addressHiQ1Vr, uintOv4RiHA, {from: accounts[2]});
		const addressRQABJi = await afiControllertJ7KZbU.setGovernance.call(addressGDQLwkp, {from: accounts[4]});

		await expect(afiControllertJ7KZbU.inCaseTokensGetStuck.call(addressHiQ1Vr, uintOv4RiHA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslQcf0GL = accounts[0]
		const afiController7VDpig = await afiController.new(addresslQcf0GL, {from: "0x0000000000000000000000000000000000000001"});
		const uintvx3BJP = BigInt("230")
		const addressFgoWsYa = accounts[0]
		const addressOHAcp0q = accounts[2]
		const addressAIx7xEK = await afiController7VDpig.earn.call(addressFgoWsYa, uintvx3BJP, {from: accounts[2]});
		const addresscybMcz4 = await afiController7VDpig.setStrategist.call(addressOHAcp0q, {from: accounts[2]});
	});
})