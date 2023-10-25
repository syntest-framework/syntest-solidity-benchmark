const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressVQGmY4q = accounts[0]
		const ControllerXG7Q7ia = await Controller.new(addressVQGmY4q, {from: accounts[3]});
		const addresse6kPPH0 = accounts[3]
		const uintstIIA2S = BigInt("527")
		const addressp2XqvDa = accounts[1]
		const addressA8sVlK = accounts[4]
		const addressinPmhFd = accounts[4]
		const uintwIdxgLB = BigInt("257")
		const addressi3DJ7QP = accounts[0]
		const uintc4tlfR = BigInt("118")
		const addressNip4mpb = accounts[1]
		const addressrCGLv8 = accounts[1]
		const addressOWbKkvI = accounts[1]
//		const addressUxpE5me = await ControllerXG7Q7ia.withdrawAll.call(addresse6kPPH0, {from: accounts[4]});
//		const addressmANcqRk = await ControllerXG7Q7ia.inCaseTokensGetStuck.call(addressp2XqvDa, uintstIIA2S, {from: accounts[5]});
//		const addressPydIz4G = await ControllerXG7Q7ia.approveStrategy.call(addressinPmhFd, addressA8sVlK, {from: accounts[3]});
//		const addressLiYgWFM = await ControllerXG7Q7ia.inCaseTokensGetStuck.call(addressi3DJ7QP, uintwIdxgLB, {from: accounts[5]});
//		const addressKb40Tr7 = await ControllerXG7Q7ia.inCaseTokensGetStuck.call(addressNip4mpb, uintc4tlfR, {from: accounts[0]});
//		const addressuoYZdCA = await ControllerXG7Q7ia.revokeStrategy.call(addressOWbKkvI, addressrCGLv8, {from: accounts[0]});

		await expect(ControllerXG7Q7ia.withdrawAll.call(addresse6kPPH0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHKPv7Qm = accounts[4]
		const ControllerlaiG8jV = await Controller.new(addressHKPv7Qm, {from: accounts[0]});
		const uinta3WUnLs = BigInt("291")
		const addressREadMQe = accounts[4]
		const addressh6GJVzn = accounts[3]
		const uintjegVmG = await ControllerlaiG8jV.setSplit.call(uinta3WUnLs, {from: accounts[0]});
//		const addressZpXdvAT = await ControllerlaiG8jV.setStrategy.call(addressh6GJVzn, addressREadMQe, {from: accounts[3]});

		await expect(ControllerlaiG8jV.setStrategy.call(addressh6GJVzn, addressREadMQe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFDpfhGA = accounts[3]
		const ControllerAgfN42i = await Controller.new(addressFDpfhGA, {from: accounts[0]});
		const uintf3P3uP3 = BigInt("1244")
		const address7lw5G5 = "0x0000000000000000000000000000000000000001"
		const addressMBsd80k = accounts[2]
		const addressVfj3VP4 = accounts[1]
		const addressG6UnsEy = accounts[1]
		const addressP2pQHlE = accounts[3]
		const addressvviXaOG = accounts[2]
		const addressPFOjQB = accounts[2]
//		const addressHbYVRKa = await ControllerAgfN42i.earn.call(address7lw5G5, uintf3P3uP3, {from: accounts[2]});
//		const address6PvQIX = await ControllerAgfN42i.revokeStrategy.call(addressVfj3VP4, addressMBsd80k, {from: accounts[1]});
//		const uintxZP3P0z = await ControllerAgfN42i.balanceOf.call(addressG6UnsEy, {from: accounts[1]});
//		const addressrP0jftA = await ControllerAgfN42i.setConverter.call(addressPFOjQB, addressvviXaOG, addressP2pQHlE, {from: accounts[5]});

		await expect(ControllerAgfN42i.earn.call(address7lw5G5, uintf3P3uP3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressE9MZIAf = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressE9MZIAf, {from: accounts[4]});
		const addressG1Lp8fz = accounts[4]
		const addressfm16MCm = accounts[0]
		const uintHdKgvm = BigInt("735")
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressfm16MCm, addressG1Lp8fz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintygGxaJ = await ControllerHp4ntg.setSplit.call(uintHdKgvm, {from: accounts[3]});

		await expect(ControllerHp4ntg.setVault.call(addressfm16MCm, addressG1Lp8fz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressuqT8h7K = accounts[1]
		const ControllerGBeb5M = await Controller.new(addressuqT8h7K, {from: accounts[0]});
		const addressJOeNrXn = accounts[1]
		const addressVAegf3B = accounts[2]
		const addressI69o4Yx = accounts[1]
		const addresse00Lsvb = accounts[1]
		const addresspir6Mrp = accounts[0]
		const addressOnk2bv5 = accounts[5]
		const addressSC1LI6J = accounts[1]
//		const addressVpo1mkP = await ControllerGBeb5M.setStrategist.call(addressJOeNrXn, {from: accounts[1]});
//		const addressLMxqp28 = await ControllerGBeb5M.inCaseStrategyTokenGetStuck.call(addressI69o4Yx, addressVAegf3B, {from: accounts[3]});
//		const addressI55wgAm = await ControllerGBeb5M.setStrategy.call(addresspir6Mrp, addresse00Lsvb, {from: accounts[4]});
//		const addressI5pBfPn = await ControllerGBeb5M.approveStrategy.call(addressSC1LI6J, addressOnk2bv5, {from: accounts[0]});

		await expect(ControllerGBeb5M.setStrategist.call(addressJOeNrXn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressd7U38gs = accounts[4]
		const ControllerMUuYzo4 = await Controller.new(addressd7U38gs, {from: accounts[3]});
		const uintzugoYsU = BigInt("50")
		const addressfAMT45s = accounts[3]
		const addressjgAdbB = accounts[5]
		const addressGSv3Vy9 = accounts[2]
		const addressfrbOptq = accounts[4]
		const addressZsGMibW = accounts[0]
		const addressBpInjsS = accounts[5]
		const address5DzRk6 = accounts[3]
		const addressVa4xrvA = accounts[3]
		const uintGRbWLm = BigInt("437")
		const addresswIzdhf9 = accounts[3]
		const addressi1eLIR4 = accounts[5]
//		const addressLVdgcgZ = await ControllerMUuYzo4.yearn.call(addressjgAdbB, addressfAMT45s, uintzugoYsU, {from: accounts[5]});
//		const addressjjkbtHQ = await ControllerMUuYzo4.setStrategy.call(addressfrbOptq, addressGSv3Vy9, {from: accounts[2]});
//		const addressvcF0VlI = await ControllerMUuYzo4.setVault.call(addressBpInjsS, addressZsGMibW, {from: accounts[0]});
//		const addressIQJevNQ = await ControllerMUuYzo4.setGovernance.call(address5DzRk6, {from: accounts[2]});
//		const addressXuCfMq4 = await ControllerMUuYzo4.setGovernance.call(addressVa4xrvA, {from: accounts[0]});
//		const uintcV7xPoY = await ControllerMUuYzo4.getExpectedReturn.call(addressi1eLIR4, addresswIzdhf9, uintGRbWLm, {from: accounts[0]});

		await expect(ControllerMUuYzo4.yearn.call(addressjgAdbB, addressfAMT45s, uintzugoYsU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVMMsbGW = accounts[1]
		const ControllerDHG108R = await Controller.new(addressVMMsbGW, {from: accounts[4]});
		const uintoUKUolS = BigInt("1933")
		const addresst6qaQbj = accounts[0]
		const addressYVQRme = accounts[0]
		const addressLwnQTyY = accounts[3]
		const addressx0MMnjk = accounts[2]
//		const addresswTXdmx3 = await ControllerDHG108R.inCaseTokensGetStuck.call(addresst6qaQbj, uintoUKUolS, {from: accounts[4]});
//		const addressVGlwxg = await ControllerDHG108R.withdrawAll.call(addressYVQRme, {from: accounts[2]});
//		const addressByuiH8 = await ControllerDHG108R.approveStrategy.call(addressx0MMnjk, addressLwnQTyY, {from: accounts[3]});

		await expect(ControllerDHG108R.inCaseTokensGetStuck.call(addresst6qaQbj, uintoUKUolS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRxTxz3q = accounts[3]
		const ControllerSHuVHEu = await Controller.new(addressRxTxz3q, {from: accounts[1]});
		const addressuHF0HNd = accounts[0]
		const addressnFx7TNT = accounts[4]
		const addressUffqax = accounts[1]
		const addressv0cNb2 = accounts[5]
		const addressQJ4v8t = "0x0000000000000000000000000000000000000001"
//		const addressmyU2Ay4 = await ControllerSHuVHEu.setOneSplit.call(addressuHF0HNd, {from: accounts[2]});
//		const addresskID8yTc = await ControllerSHuVHEu.setGovernance.call(addressnFx7TNT, {from: accounts[3]});
//		const addressRpZfzdA = await ControllerSHuVHEu.inCaseStrategyTokenGetStuck.call(addressv0cNb2, addressUffqax, {from: accounts[0]});
//		const addressalCBZcu = await ControllerSHuVHEu.setRewards.call(addressQJ4v8t, {from: accounts[2]});

		await expect(ControllerSHuVHEu.setOneSplit.call(addressuHF0HNd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressR2uJFgG = accounts[2]
		const ControlleriQHH5c = await Controller.new(addressR2uJFgG, {from: "0x0000000000000000000000000000000000000001"});
		const addressc75cX8 = accounts[1]
		const addressFWutWQr = accounts[2]
		const addressp3ZgBh6 = accounts[2]
		const addressTfeBxLR = accounts[2]
		const addressPZ9Tj5L = accounts[5]
		const addressfbi2zTO = accounts[3]
		const addressY6joq8N = accounts[3]
		const uintOLwItjs = await ControlleriQHH5c.balanceOf.call(addressc75cX8, {from: "0x0000000000000000000000000000000000000001"});
		const addressEUaUsmj = await ControlleriQHH5c.setConverter.call(addressTfeBxLR, addressp3ZgBh6, addressFWutWQr, {from: accounts[0]});
		const addressymQEGf7 = await ControlleriQHH5c.setVault.call(addressfbi2zTO, addressPZ9Tj5L, {from: accounts[1]});
		const addressJEr9Q3G = await ControlleriQHH5c.setStrategist.call(addressY6joq8N, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressC4SRKL = accounts[4]
		const ControllerlaiG8jV = await Controller.new(addressC4SRKL, {from: accounts[0]});
		const uintwEqJX9 = BigInt("291")
		const uintnQtmSEU = BigInt("468")
		const addressqdnz9bv = accounts[4]
		const addressUT8GcQp = accounts[1]
		const addressXQF6HLM = accounts[4]
		const addressbeCIlMd = accounts[4]
		const uintjegVmG = await ControllerlaiG8jV.setSplit.call(uintwEqJX9, {from: accounts[0]});
//		const uintLEqqsK = await ControllerlaiG8jV.getExpectedReturn.call(addressUT8GcQp, addressqdnz9bv, uintnQtmSEU, {from: accounts[1]});
//		const addressZpXdvAT = await ControllerlaiG8jV.setStrategy.call(addressbeCIlMd, addressXQF6HLM, {from: accounts[3]});

		await expect(ControllerlaiG8jV.getExpectedReturn.call(addressUT8GcQp, addressqdnz9bv, uintnQtmSEU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfNs0DY = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressfNs0DY, {from: accounts[4]});
		const addressWnkgEdR = accounts[0]
		const addressziRvNW = accounts[4]
		const addresssOGUTX3 = accounts[5]
		const addressIrOzSgq = accounts[6]
		const addressNuN9pU9 = accounts[0]
//		const addressOSqOs55 = await ControllerHp4ntg.setConverter.call(addresssOGUTX3, addressziRvNW, addressWnkgEdR, {from: accounts[3]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressNuN9pU9, addressIrOzSgq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.setConverter.call(addresssOGUTX3, addressziRvNW, addressWnkgEdR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscuuMDV = accounts[0]
		const ControllerHp4ntg = await Controller.new(addresscuuMDV, {from: accounts[4]});
		const addressl7Vnyn8 = accounts[0]
		const addressSq87Hh0 = accounts[1]
		const addressb0XPSi5 = accounts[0]
//		const uintksNKI4R = await ControllerHp4ntg.balanceOf.call(addressl7Vnyn8, {from: accounts[4]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressb0XPSi5, addressSq87Hh0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.balanceOf.call(addressl7Vnyn8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspiGA6w = accounts[0]
		const ControllerHp4ntg = await Controller.new(addresspiGA6w, {from: accounts[4]});
		const uinttlgTDV4 = BigInt("1814")
		const addressOlKa989 = accounts[3]
		const addressVi38Nc = accounts[5]
		const addressOIVUYo = accounts[1]
//		const addressuoavv5u = await ControllerHp4ntg.withdraw.call(addressOlKa989, uinttlgTDV4, {from: accounts[3]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressOIVUYo, addressVi38Nc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.withdraw.call(addressOlKa989, uinttlgTDV4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxfaQGvA = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressxfaQGvA, {from: accounts[4]});
		const addressol58Txu = accounts[1]
		const addressIEsnRpc = accounts[5]
		const addressw3JOvrh = accounts[6]
		const addressz27zOi = accounts[0]
//		const addressxTuk6ra = await ControllerHp4ntg.inCaseStrategyTokenGetStuck.call(addressIEsnRpc, addressol58Txu, {from: accounts[3]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressz27zOi, addressw3JOvrh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.inCaseStrategyTokenGetStuck.call(addressIEsnRpc, addressol58Txu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address07A1WY = accounts[0]
		const ControllerHp4ntg = await Controller.new(address07A1WY, {from: accounts[4]});
		const addressD5fB4Au = accounts[2]
		const addressVBsp7Lw = accounts[1]
		const addressvmIlA9r = accounts[6]
		const addressT47Qkj = accounts[0]
//		const addressZZn7kiA = await ControllerHp4ntg.revokeStrategy.call(addressVBsp7Lw, addressD5fB4Au, {from: accounts[2]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressT47Qkj, addressvmIlA9r, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.revokeStrategy.call(addressVBsp7Lw, addressD5fB4Au, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyBUmC13 = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressyBUmC13, {from: accounts[4]});
		const addressAjKra4 = accounts[4]
		const addressiZ4TTnN = "0x0000000000000000000000000000000000000001"
		const addressMjv2uc = accounts[6]
		const addressoDFgrqR = accounts[0]
//		const addressEnT0Oqs = await ControllerHp4ntg.approveStrategy.call(addressiZ4TTnN, addressAjKra4, {from: accounts[2]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressoDFgrqR, addressMjv2uc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.approveStrategy.call(addressiZ4TTnN, addressAjKra4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseCUBBRx = accounts[0]
		const ControllerHp4ntg = await Controller.new(addresseCUBBRx, {from: accounts[4]});
		const addressdRevrIb = accounts[1]
		const addressuODYN3w = accounts[4]
		const addresscUTDt0n = accounts[0]
		const addressL8HLPLN = accounts[0]
		const addressuD2uW3O = accounts[4]
		const addressEkIihiR = accounts[5]
		const addressM1hobqE = accounts[0]
//		const addressC3UwWVf = await ControllerHp4ntg.setStrategy.call(addressuODYN3w, addressdRevrIb, {from: accounts[4]});
//		const addresssVlGCmg = await ControllerHp4ntg.setConverter.call(addressuD2uW3O, addressL8HLPLN, addresscUTDt0n, {from: accounts[2]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressM1hobqE, addressEkIihiR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.setStrategy.call(addressuODYN3w, addressdRevrIb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMT85Hr = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressMT85Hr, {from: accounts[4]});
		const addressJMwOlA9 = accounts[3]
		const addressVKkvy9p = accounts[5]
		const addressPumeYK = accounts[1]
		const addressc0WoUfu = accounts[4]
		const addressenImjd2 = accounts[3]
//		const addressmZFTbuG = await ControllerHp4ntg.setGovernance.call(addressJMwOlA9, {from: accounts[1]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressPumeYK, addressVKkvy9p, {from: "0x0000000000000000000000000000000000000001"});
//		const addressG6HzB15 = await ControllerHp4ntg.setStrategy.call(addressenImjd2, addressc0WoUfu, {from: accounts[0]});

		await expect(ControllerHp4ntg.setGovernance.call(addressJMwOlA9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWhLNWMz = accounts[0]
		const ControllerHp4ntg = await Controller.new(addressWhLNWMz, {from: accounts[4]});
		const addressDZwHRZa = "0x0000000000000000000000000000000000000001"
		const addresss3aaWw9 = accounts[0]
		const addresstSmIUDi = accounts[5]
		const addressnxTD4R7 = accounts[1]
//		const addressEVv1ESp = await ControllerHp4ntg.setRewards.call(addressDZwHRZa, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoKeDDK2 = await ControllerHp4ntg.setStrategist.call(addresss3aaWw9, {from: accounts[5]});
//		const addresss0nilG = await ControllerHp4ntg.setVault.call(addressnxTD4R7, addresstSmIUDi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerHp4ntg.setRewards.call(addressDZwHRZa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})