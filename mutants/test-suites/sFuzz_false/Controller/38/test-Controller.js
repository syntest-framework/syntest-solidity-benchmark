const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressg0aXGh = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressg0aXGh, {from: accounts[3]});
		const uintgAdh6Cz = BigInt("43")
		const addressfMF9bGZ = accounts[3]
		const uintsk8McZ3 = BigInt("260")
		const addressM825tEz = accounts[0]
		const addressW0NscDM = accounts[3]
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addressfMF9bGZ, uintgAdh6Cz, {from: accounts[3]});
//		const addresswHDB5K = await ControllercgcLIIp.inCaseTokensGetStuck.call(addressM825tEz, uintsk8McZ3, {from: accounts[0]});
//		const addressltkv4G4 = await ControllercgcLIIp.withdrawAll.call(addressW0NscDM, {from: accounts[2]});

		await expect(ControllercgcLIIp.inCaseTokensGetStuck.call(addressfMF9bGZ, uintgAdh6Cz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszNxS7Ox = accounts[1]
		const ControllerShITFU7 = await Controller.new(addresszNxS7Ox, {from: accounts[4]});
		const addresstULoJd = accounts[5]
		const addressrAEc0ab = accounts[4]
		const addresszsrBIm9 = accounts[1]
		const addressUSbUWa = accounts[2]
		const uintwb7yIi9 = BigInt("792")
		const addressvUpknPU = accounts[3]
		const addresslIjvZSf = accounts[0]
		const uintXRtYoxQ = BigInt("1758")
		const addressgfYbZmS = accounts[0]
		const addressKmhS5Sc = await ControllerShITFU7.setConverter.call(addresszsrBIm9, addressrAEc0ab, addresstULoJd, {from: accounts[4]});
//		const addressQwzo8dH = await ControllerShITFU7.setRewards.call(addressUSbUWa, {from: accounts[3]});
//		const addressYc3AtWw = await ControllerShITFU7.yearn.call(addresslIjvZSf, addressvUpknPU, uintwb7yIi9, {from: accounts[2]});
//		const addressNFHhDyY = await ControllerShITFU7.inCaseTokensGetStuck.call(addressgfYbZmS, uintXRtYoxQ, {from: accounts[4]});

		await expect(ControllerShITFU7.setRewards.call(addressUSbUWa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGbyhG4l = accounts[4]
		const Controllerc6qOq4j = await Controller.new(addressGbyhG4l, {from: "0x0000000000000000000000000000000000000001"});
		const addressvwf5Kkf = accounts[3]
		const addressj8Wu2Pm = accounts[3]
		const addressc3XTkQg = accounts[3]
		const addressGC5mjPT = "0x0000000000000000000000000000000000000001"
		const uintd4BCjKo = BigInt("424")
		const addressLxzAWyL = accounts[0]
		const addressRCgYkZv = accounts[2]
		const uintkRRFgeH = BigInt("2009")
		const uintKGVoai0 = BigInt("1750")
		const addressYQsyNZt = accounts[2]
		const addresscPAW939 = accounts[4]
		const addressp3SMPJy = await Controllerc6qOq4j.setStrategy.call(addressj8Wu2Pm, addressvwf5Kkf, {from: accounts[4]});
		const addressS5j16xe = await Controllerc6qOq4j.inCaseStrategyTokenGetStuck.call(addressGC5mjPT, addressc3XTkQg, {from: accounts[3]});
		const addressm2HoRn = await Controllerc6qOq4j.yearn.call(addressRCgYkZv, addressLxzAWyL, uintd4BCjKo, {from: "0x0000000000000000000000000000000000000001"});
		const uintdN39p5e = await Controllerc6qOq4j.setSplit.call(uintkRRFgeH, {from: accounts[1]});
		const addressCdjTYjg = await Controllerc6qOq4j.yearn.call(addresscPAW939, addressYQsyNZt, uintKGVoai0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addresslTecuV = accounts[2]
		const ControllerfWGCJ3e = await Controller.new(addresslTecuV, {from: accounts[4]});
		const addressQc8RuH1 = accounts[3]
		const uintDJIY36J = BigInt("796")
		const addressQfOFJ6u = accounts[5]
		const addressAu3Buq = accounts[1]
		const addressywtEnxP = accounts[1]
		const addressaxiFaPF = accounts[0]
//		const addressz3GYOeR = await ControllerfWGCJ3e.setOneSplit.call(addressQc8RuH1, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuYZKhOB = await ControllerfWGCJ3e.getExpectedReturn.call(addressAu3Buq, addressQfOFJ6u, uintDJIY36J, {from: accounts[0]});
//		const addressENEt06j = await ControllerfWGCJ3e.revokeStrategy.call(addressaxiFaPF, addressywtEnxP, {from: accounts[2]});

		await expect(ControllerfWGCJ3e.setOneSplit.call(addressQc8RuH1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjRc2PPs = accounts[0]
		const ControllerdYsBM4y = await Controller.new(addressjRc2PPs, {from: accounts[1]});
		const addressoegm16h = accounts[4]
		const uintHOuRKNS = BigInt("1162")
		const addressS18nQPU = accounts[3]
		const addressRTOY7p7 = accounts[4]
		const addresspY0BNbx = accounts[3]
//		const uintsYY9AfI = await ControllerdYsBM4y.balanceOf.call(addressoegm16h, {from: accounts[0]});
//		const uintm5BfPSt = await ControllerdYsBM4y.setSplit.call(uintHOuRKNS, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoVaDvA = await ControllerdYsBM4y.setConverter.call(addresspY0BNbx, addressRTOY7p7, addressS18nQPU, {from: accounts[3]});

		await expect(ControllerdYsBM4y.balanceOf.call(addressoegm16h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfHshSz3 = accounts[3]
		const Controllerfkax0tc = await Controller.new(addressfHshSz3, {from: accounts[1]});
		const uintlgwKIln = BigInt("311")
		const addresspg0YAct = accounts[4]
		const addressWJjUtZQ = accounts[0]
		const addressBihXVcK = accounts[4]
//		const uintkBAbAr = await Controllerfkax0tc.setSplit.call(uintlgwKIln, {from: accounts[2]});
//		const addressWWQUk99 = await Controllerfkax0tc.setOneSplit.call(addresspg0YAct, {from: accounts[1]});
//		const addressnqZfhkm = await Controllerfkax0tc.setGovernance.call(addressWJjUtZQ, {from: accounts[0]});
//		const addressRgI5lW4 = await Controllerfkax0tc.setOneSplit.call(addressBihXVcK, {from: accounts[0]});

		await expect(Controllerfkax0tc.setSplit.call(uintlgwKIln, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressP1Ylzex = accounts[2]
		const ControllerLI6tEov = await Controller.new(addressP1Ylzex, {from: accounts[5]});
		const addressqjosiiC = accounts[5]
		const addressdHWITT2 = accounts[2]
		const addresskyi9gFr = accounts[1]
		const uintgeEeQSz = BigInt("901")
		const addresssA0Yig = accounts[2]
		const uintg2CKmeG = BigInt("1805")
		const addressmJ63aRL = accounts[2]
		const addressKfRKQ6l = accounts[3]
		const addressSEBYao = accounts[4]
		const addressYdfADfE = accounts[3]
		const addressFG72IGk = accounts[5]
		const addressMwzNgNL = accounts[5]
//		const addressMljsnxY = await ControllerLI6tEov.setConverter.call(addresskyi9gFr, addressdHWITT2, addressqjosiiC, {from: accounts[2]});
//		const addressBr26rTw = await ControllerLI6tEov.withdraw.call(addresssA0Yig, uintgeEeQSz, {from: accounts[1]});
//		const uintyPh29sw = await ControllerLI6tEov.setSplit.call(uintg2CKmeG, {from: accounts[1]});
//		const addressjSPjyyO = await ControllerLI6tEov.setStrategy.call(addressKfRKQ6l, addressmJ63aRL, {from: accounts[4]});
//		const addressE5Xl8p7 = await ControllerLI6tEov.approveStrategy.call(addressYdfADfE, addressSEBYao, {from: accounts[1]});
//		const addressq76T41Y = await ControllerLI6tEov.setStrategy.call(addressMwzNgNL, addressFG72IGk, {from: accounts[0]});

		await expect(ControllerLI6tEov.setConverter.call(addresskyi9gFr, addressdHWITT2, addressqjosiiC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyTrTSX = accounts[4]
		const ControllerRsNOWGI = await Controller.new(addressyTrTSX, {from: accounts[2]});
		const uints11FqIS = BigInt("1551")
		const addressbSuUoXX = accounts[2]
		const addressS09gTaU = accounts[1]
		const addressqJIwcpU = accounts[5]
		const addressH3035dl = accounts[4]
		const addressTYsm7YO = accounts[3]
		const addressaqSOAy = accounts[0]
		const addresskIxWlXX = accounts[1]
		const uintRXbOdCr = BigInt("1225")
		const addressFCvGJ7H = accounts[1]
		const addresst7pRXv2 = accounts[2]
		const uintGeKGWL1 = BigInt("240")
		const addressRovlxXL = accounts[5]
		const addressrFOPVw7 = accounts[5]
//		const addressNlBRbPI = await ControllerRsNOWGI.earn.call(addressbSuUoXX, uints11FqIS, {from: accounts[0]});
//		const addresszfQNEQ6 = await ControllerRsNOWGI.inCaseStrategyTokenGetStuck.call(addressqJIwcpU, addressS09gTaU, {from: accounts[5]});
//		const addressRHjknGA = await ControllerRsNOWGI.approveStrategy.call(addressTYsm7YO, addressH3035dl, {from: accounts[3]});
//		const addressAoHzZx4 = await ControllerRsNOWGI.setVault.call(addresskIxWlXX, addressaqSOAy, {from: accounts[0]});
//		const addressc6lvl20 = await ControllerRsNOWGI.yearn.call(addresst7pRXv2, addressFCvGJ7H, uintRXbOdCr, {from: accounts[2]});
//		const addressZ7Glsh3 = await ControllerRsNOWGI.yearn.call(addressrFOPVw7, addressRovlxXL, uintGeKGWL1, {from: accounts[5]});

		await expect(ControllerRsNOWGI.earn.call(addressbSuUoXX, uints11FqIS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQnewzqH = "0x0000000000000000000000000000000000000001"
		const ControllerSyLirPd = await Controller.new(addressQnewzqH, {from: accounts[5]});
		const addressT0BC5Ap = accounts[2]
		const uintwaErW5R = BigInt("2046")
		const addresszzMHYjC = accounts[1]
		const addressF8ZfAn1 = accounts[1]
		const addressGgzbQSY = accounts[4]
		const uintimMNWis = BigInt("1886")
		const addressWBmxcVr = accounts[4]
		const addressQEVsDFP = accounts[0]
//		const addressfEk53bw = await ControllerSyLirPd.setGovernance.call(addressT0BC5Ap, {from: accounts[1]});
//		const addresse1IoM31 = await ControllerSyLirPd.earn.call(addresszzMHYjC, uintwaErW5R, {from: accounts[4]});
//		const addressPUyk0jD = await ControllerSyLirPd.setGovernance.call(addressF8ZfAn1, {from: accounts[0]});
//		const uintkTvS4AI = await ControllerSyLirPd.balanceOf.call(addressGgzbQSY, {from: accounts[5]});
//		const uintaDPv56j = await ControllerSyLirPd.getExpectedReturn.call(addressQEVsDFP, addressWBmxcVr, uintimMNWis, {from: accounts[5]});

		await expect(ControllerSyLirPd.setGovernance.call(addressT0BC5Ap, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB1qo9Xj = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressB1qo9Xj, {from: accounts[3]});
		const addressSMCGlBp = accounts[5]
		const uintQhuEIwZ = BigInt("314")
		const addressxGWogGf = accounts[4]
		const uintXkCyye = BigInt("1741")
		const addresskyLU2cB = accounts[3]
		const address4m35pZ = accounts[3]
//		const addressmloGZFI = await ControllercgcLIIp.withdrawAll.call(addressSMCGlBp, {from: accounts[3]});
//		const addressOrwTHpC = await ControllercgcLIIp.earn.call(addressxGWogGf, uintQhuEIwZ, {from: accounts[2]});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addresskyLU2cB, uintXkCyye, {from: accounts[3]});
//		const addressltkv4G4 = await ControllercgcLIIp.withdrawAll.call(address4m35pZ, {from: accounts[2]});

		await expect(ControllercgcLIIp.withdrawAll.call(addressSMCGlBp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressK9ymeUs = accounts[1]
		const ControllervBJHVpk = await Controller.new(addressK9ymeUs, {from: accounts[4]});
		const addresssWby95p = accounts[0]
		const addressHxg5srE = accounts[5]
		const uintHQPZWZ = BigInt("536")
		const uintN1vO9bk = BigInt("1317")
		const addresslHACZCM = accounts[0]
		const addressVpsdVK0 = accounts[3]
		const addressqrTrdck = "0x0000000000000000000000000000000000000001"
//		const addresseWLsWXr = await ControllervBJHVpk.setStrategy.call(addressHxg5srE, addresssWby95p, {from: accounts[4]});
//		const uint5TDddy = await ControllervBJHVpk.setSplit.call(uintHQPZWZ, {from: accounts[0]});
//		const addressiMh3Lp = await ControllervBJHVpk.yearn.call(addressVpsdVK0, addresslHACZCM, uintN1vO9bk, {from: accounts[3]});
//		const addressL0VjEAy = await ControllervBJHVpk.setRewards.call(addressqrTrdck, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllervBJHVpk.setStrategy.call(addressHxg5srE, addresssWby95p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressY8lF7mL = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressY8lF7mL, {from: accounts[3]});
		const addressZatBIs = "0x0000000000000000000000000000000000000001"
		const addressC4KPTc = accounts[2]
		const uintvL1XOgT = BigInt("43")
		const addresss9Q5tK = accounts[3]
		const addressze5ThvF = accounts[4]
//		const addressQEB18Ok = await ControllercgcLIIp.setVault.call(addressC4KPTc, addressZatBIs, {from: accounts[1]});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addresss9Q5tK, uintvL1XOgT, {from: accounts[3]});
//		const addressltkv4G4 = await ControllercgcLIIp.withdrawAll.call(addressze5ThvF, {from: accounts[2]});

		await expect(ControllercgcLIIp.setVault.call(addressC4KPTc, addressZatBIs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressy9qv0RS = accounts[1]
		const ControllervBJHVpk = await Controller.new(addressy9qv0RS, {from: accounts[4]});
		const addressH8E4BHB = accounts[1]
		const addressBrDThrZ = accounts[4]
		const addresswmRMPrV = accounts[0]
		const addresspgC4pTL = accounts[5]
		const uintk8Qyuwv = BigInt("549")
		const uintAwuQ61 = BigInt("1317")
		const addressq2zvG4U = accounts[0]
		const addressl2fGeBF = accounts[3]
		const addressthGsLte = accounts[4]
//		const addressmLpWUVL = await ControllervBJHVpk.inCaseStrategyTokenGetStuck.call(addressBrDThrZ, addressH8E4BHB, {from: accounts[3]});
//		const addresseWLsWXr = await ControllervBJHVpk.setStrategy.call(addresspgC4pTL, addresswmRMPrV, {from: accounts[4]});
//		const uint5TDddy = await ControllervBJHVpk.setSplit.call(uintk8Qyuwv, {from: accounts[0]});
//		const addressiMh3Lp = await ControllervBJHVpk.yearn.call(addressl2fGeBF, addressq2zvG4U, uintAwuQ61, {from: accounts[3]});
//		const addressL0VjEAy = await ControllervBJHVpk.setRewards.call(addressthGsLte, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllervBJHVpk.inCaseStrategyTokenGetStuck.call(addressBrDThrZ, addressH8E4BHB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressK23IrLe = accounts[1]
		const ControllerNkLG0xW = await Controller.new(addressK23IrLe, {from: accounts[4]});
		const addressxcoNlae = accounts[4]
		const addresst9h7MNQ = accounts[4]
		const uintjD12cq = BigInt("1593")
		const addressyk3sKLT = accounts[2]
		const addressNcjaFdR = accounts[3]
		const uintDyFO4VR = BigInt("1509")
		const addressxMJJoBm = accounts[4]
		const addressx37EaXz = accounts[1]
		const addressGPcHAPw = accounts[2]
//		const addressqVzmfal = await ControllerNkLG0xW.setStrategist.call(addressxcoNlae, {from: accounts[2]});
//		const address8PrEsP = await ControllerNkLG0xW.withdrawAll.call(addresst9h7MNQ, {from: accounts[5]});
//		const addressu5Cy5iQ = await ControllerNkLG0xW.yearn.call(addressNcjaFdR, addressyk3sKLT, uintjD12cq, {from: accounts[0]});
//		const addressrrRccQ2 = await ControllerNkLG0xW.inCaseTokensGetStuck.call(addressxMJJoBm, uintDyFO4VR, {from: accounts[0]});
//		const addressG4dxGk = await ControllerNkLG0xW.setStrategy.call(addressGPcHAPw, addressx37EaXz, {from: accounts[4]});

		await expect(ControllerNkLG0xW.setStrategist.call(addressxcoNlae, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUU4oPFj = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressUU4oPFj, {from: accounts[3]});
		const addressEoEzcdA = accounts[0]
		const addressDrZ3jWK = accounts[1]
//		const addressVeiUPT = await ControllercgcLIIp.revokeStrategy.call(addressDrZ3jWK, addressEoEzcdA, {from: accounts[0]});

		await expect(ControllercgcLIIp.revokeStrategy.call(addressDrZ3jWK, addressEoEzcdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressG5VlEWg = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressG5VlEWg, {from: accounts[3]});
		const addressQUMqZYv = accounts[0]
		const addressXSTMBrX = accounts[3]
		const uintq3YipMC = BigInt("25")
		const addressWR3evvu = accounts[4]
//		const addressvaZpM19 = await ControllercgcLIIp.approveStrategy.call(addressXSTMBrX, addressQUMqZYv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addressWR3evvu, uintq3YipMC, {from: accounts[3]});

		await expect(ControllercgcLIIp.approveStrategy.call(addressXSTMBrX, addressQUMqZYv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgchSUp = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressgchSUp, {from: accounts[3]});
		const uintRWEyNxc = BigInt("1711")
		const addressDMq5Kcm = "0x0000000000000000000000000000000000000001"
		const addressuTWT84O = "0x0000000000000000000000000000000000000001"
		const addressq0jRgdo = accounts[2]
		const addressDP1E9Y = accounts[2]
		const uintdiQp7l = BigInt("25")
		const addressJ6Ysxqu = accounts[4]
//		const uintZKKr1KT = await ControllercgcLIIp.getExpectedReturn.call(addressuTWT84O, addressDMq5Kcm, uintRWEyNxc, {from: accounts[5]});
//		const address0yo12I = await ControllercgcLIIp.revokeStrategy.call(addressDP1E9Y, addressq0jRgdo, {from: accounts[4]});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addressJ6Ysxqu, uintdiQp7l, {from: accounts[3]});

		await expect(ControllercgcLIIp.getExpectedReturn.call(addressuTWT84O, addressDMq5Kcm, uintRWEyNxc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXgMhjLo = accounts[4]
		const ControllercgcLIIp = await Controller.new(addressXgMhjLo, {from: accounts[3]});
		const uint6VZE9U = BigInt("606")
		const addressfgzqSgY = accounts[1]
		const uintGiHaJv = BigInt("25")
		const addresst2algbU = accounts[4]
		const addressXxE22Fu = accounts[1]
		const addressaJEqbQA = accounts[1]
//		const addresskh38jIJ = await ControllercgcLIIp.withdraw.call(addressfgzqSgY, uint6VZE9U, {from: accounts[1]});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addresst2algbU, uintGiHaJv, {from: accounts[3]});
//		const addressn4wDoE = await ControllercgcLIIp.setVault.call(addressaJEqbQA, addressXxE22Fu, {from: accounts[0]});

		await expect(ControllercgcLIIp.withdraw.call(addressfgzqSgY, uint6VZE9U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslOGEqlG = accounts[4]
		const ControllercgcLIIp = await Controller.new(addresslOGEqlG, {from: accounts[3]});
		const uintTlpXDhM = BigInt("587")
		const addressGkBqlDh = accounts[0]
		const addressJhPF2QO = accounts[1]
		const uinthIyDAP2 = BigInt("27")
		const addressgPQP6LB = accounts[4]
//		const addressbRh3MjI = await ControllercgcLIIp.yearn.call(addressJhPF2QO, addressGkBqlDh, uintTlpXDhM, {from: accounts[3]});
//		const addressNvsbXp8 = await ControllercgcLIIp.inCaseTokensGetStuck.call(addressgPQP6LB, uinthIyDAP2, {from: accounts[3]});

		await expect(ControllercgcLIIp.yearn.call(addressJhPF2QO, addressGkBqlDh, uintTlpXDhM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})