const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringPfTdVLD = "pVMDeaKTwkrEPNFlxIyXuyuFaCbcutcB"
		const stringNW8q61G = "fQPMhgh5bTSBGVxyd3fLxggowkRAbmecFeDtIECRu5pJYOBrsNUI2d28rFCBoYRLoeEWSEG"
		const uintY4n5IWB = BigInt("20")
		const DSPQiv4X5y = await DSP.new(stringPfTdVLD, stringNW8q61G, uintY4n5IWB, {from: accounts[4]});
		const uintnDYiK4B = BigInt("1364")
		const addressEOnKvTv = accounts[4]
		const addressU0uUX4q = accounts[3]
		const addressVVNmcV2 = accounts[3]
		const boolHZakRmQ = await DSPQiv4X5y.acceptOwnership.call({from: accounts[1]});
		const boolaqWLwOb = await DSPQiv4X5y.approve.call(addressEOnKvTv, uintnDYiK4B, {from: accounts[2]});
		const boolktlED9k = await DSPQiv4X5y.freezeAccount.call(addressU0uUX4q, {from: accounts[2]});
		const addressJUm6p6P = await DSPQiv4X5y.transferOwnership.call(addressVVNmcV2, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPU81PYPs = await DSP.new({from: accounts[0]});
		const uintbXrUL2 = BigInt("66")
		const addressEMAmhZR = accounts[2]
		const addresszMjtbxK = accounts[4]
		await DSPU81PYPs.f.call({from: accounts[5]});
		const boolvUAU5dF = await DSPU81PYPs.transferFrom.call(addresszMjtbxK, addressEMAmhZR, uintbXrUL2, {from: accounts[0]});
		const uint256nNI8BcO = await DSPU81PYPs.totalSupply.call({from: accounts[5]});

		await expect(DSPU81PYPs.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const addressTu7UyXg = accounts[0]
		const uintCkGDTJM = BigInt("1242")
		const addresse0EZmuV = accounts[5]
		const addresstQUpkwb = accounts[0]
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressTu7UyXg, {from: accounts[4]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresse0EZmuV, uintCkGDTJM, {from: accounts[0]});
		const addressM32lfeE = await DSPjipapgN.addPauser.call(addresstQUpkwb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPjipapgN.addPauser.call(addressTu7UyXg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSj0hTyO = await DSP.new({from: accounts[5]});
		const addressWSJR1E = accounts[4]
		const addressDnXrgA5 = accounts[3]
		const addresszMTuTPu = accounts[2]
		const addressZr2s7Ix = await DSPSj0hTyO.removePauser.call(addressWSJR1E, {from: accounts[5]});
		await DSPSj0hTyO.onlyOwner.call({from: accounts[2]});
		const boolsSQBvLd = await DSPSj0hTyO.isPauser.call(addressDnXrgA5, {from: accounts[5]});
		const addressNk2v6L = await DSPSj0hTyO.transferOwnership.call(addresszMTuTPu, {from: accounts[3]});

		await expect(DSPSj0hTyO.removePauser.call(addressWSJR1E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPl2eZgZ8 = await DSP.new({from: accounts[0]});
		const uinteVZKvln = BigInt("576")
		const addressGMcEs7N = accounts[2]
		const addressHrAKAe = accounts[3]
		const uintB78aGln = BigInt("1771")
		const addressDEjE9om = accounts[3]
		await DSPl2eZgZ8.whenPaused.call({from: accounts[1]});
		const boolhbZCtpR = await DSPl2eZgZ8.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const booliDw8bri = await DSPl2eZgZ8.transferFrom.call(addressHrAKAe, addressGMcEs7N, uinteVZKvln, {from: accounts[5]});
		const boolmIcLPri = await DSPl2eZgZ8.increaseAllowance.call(addressDEjE9om, uintB78aGln, {from: accounts[0]});

		await expect(DSPl2eZgZ8.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintiWqDOjV = BigInt("1107")
		const addressL1N8A3Z = accounts[3]
		const addressPENjRE1 = accounts[0]
		const uintLYzZRQJ = BigInt("1242")
		const addressuKjCI3P = accounts[5]
		const addressTu4Q0t = accounts[0]
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressL1N8A3Z, uintiWqDOjV, {from: accounts[0]});
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressPENjRE1, {from: accounts[4]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressuKjCI3P, uintLYzZRQJ, {from: accounts[0]});
		const addressM32lfeE = await DSPjipapgN.addPauser.call(addressTu4Q0t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqdORvfE, true)
		await expect(DSPjipapgN.addPauser.call(addressPENjRE1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintealQ2F = BigInt("1242")
		const addressHAwlqq4 = accounts[5]
		const addressDuVJAeB = accounts[0]
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressHAwlqq4, uintealQ2F, {from: accounts[0]});
		const addressM32lfeE = await DSPjipapgN.addPauser.call(addressDuVJAeB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPjipapgN.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintdDTy7GV = BigInt("1242")
		const addressDfaeXq = accounts[5]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressDfaeXq, uintdDTy7GV, {from: accounts[0]});

		assert.equal(boolzXf4hf, true)
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintXQFPqrN = BigInt("1242")
		const addresslxYcI6a = accounts[6]
		const uintdnte9N = BigInt("1082")
		const addressauMg0tk = accounts[0]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresslxYcI6a, uintXQFPqrN, {from: accounts[0]});
		const boolUlcychm = await DSPjipapgN.approve.call(addressauMg0tk, uintdnte9N, {from: accounts[1]});

		assert.equal(boolUlcychm, true)
		assert.equal(boolzXf4hf, true)
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintap10jVO = BigInt("1289")
		const addressw6eSCnf = accounts[5]
		const uintPC1n4aj = BigInt("1267")
		const uintgCDmpVf = BigInt("736")
		const addresswdNM05D = accounts[2]
		const boollXYaEvS = await DSPjipapgN.paused.call({from: accounts[1]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressw6eSCnf, uintap10jVO, {from: accounts[0]});
		const boolYhB3xId = await DSPjipapgN.lock.call(addresswdNM05D, uintgCDmpVf, uintPC1n4aj, {from: accounts[3]});

		assert.equal(boollXYaEvS, false)
		assert.equal(boolzXf4hf, true)
		await expect(DSPjipapgN.lock.call(addresswdNM05D, uintgCDmpVf, uintPC1n4aj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintjr3eAkJ = BigInt("1242")
		const address22bkb9 = accounts[6]
		const addressfdYxfxq = accounts[0]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(address22bkb9, uintjr3eAkJ, {from: accounts[0]});
		const boolKUhe1Fb = await DSPjipapgN.isOwner.call(addressfdYxfxq, {from: accounts[4]});
		await DSPjipapgN.unpause.call({from: accounts[2]});

		assert.equal(boolKUhe1Fb, true)
		assert.equal(boolzXf4hf, true)
		await expect(DSPjipapgN.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintZg9Rms = BigInt("1107")
		const addressQxPhn8M = accounts[3]
		const addressaSVFdTc = accounts[0]
		const addressNkPQyfB = accounts[0]
		const addressAnZghmY = accounts[3]
		const addressBnBqU0Y = "0x0000000000000000000000000000000000000001"
		const uintOSWCiqt = BigInt("1242")
		const addresssGlRFGO = accounts[5]
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressQxPhn8M, uintZg9Rms, {from: accounts[0]});
		const uint256qAmNSG1 = await DSPjipapgN.balanceOf.call(addressaSVFdTc, {from: accounts[1]});
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressNkPQyfB, {from: accounts[4]});
		const addressF0q7SkE = await DSPjipapgN.transferOwnership.call(addressAnZghmY, {from: accounts[0]});
		const booltsiVKq = await DSPjipapgN.freezeAccount.call(addressBnBqU0Y, {from: accounts[2]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresssGlRFGO, uintOSWCiqt, {from: accounts[0]});

		assert.equal(boolqdORvfE, true)
		assert.equal(uint256qAmNSG1, BigInt("100000000000000000000000000000"))
		await expect(DSPjipapgN.addPauser.call(addressNkPQyfB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintkm3ZPUM = BigInt("1107")
		const addressFTxvWP = accounts[3]
		const addressFjRWj2E = accounts[0]
		const uintKmTaekN = BigInt("1242")
		const addresshi2zSGP = accounts[5]
		const uintWigDCOx = BigInt("52")
		const uintcF1GQK = BigInt("1336")
		const addresswmrJ4U = accounts[4]
		const addressehCyBkX = accounts[2]
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressFTxvWP, uintkm3ZPUM, {from: accounts[0]});
		await DSPjipapgN.pause.call({from: accounts[0]});
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressFjRWj2E, {from: accounts[4]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresshi2zSGP, uintKmTaekN, {from: accounts[0]});
		const boolscFLf9I = await DSPjipapgN.transferWithLock.call(addresswmrJ4U, uintcF1GQK, uintWigDCOx, {from: accounts[3]});
		const addressPWsNs0w = await DSPjipapgN.removePauser.call(addressehCyBkX, {from: accounts[1]});

		assert.equal(boolqdORvfE, true)
		await expect(DSPjipapgN.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWiugweT = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr9Rm0Ii = accounts[2]
		const uint256dyz2xlz = await DSPWiugweT.balanceOf.call(addressr9Rm0Ii, {from: accounts[0]});
		const uint8XXntfJB = await DSPWiugweT.decimals.call({from: accounts[0]});
		const stringBbEsbhg = await DSPWiugweT.symbol.call({from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintxOC4xwC = BigInt("1239")
		const addressbw590z = accounts[6]
		const uintDaFNZwW = BigInt("1153")
		const address0buhIy = accounts[3]
		const uintRbhYwLJ = BigInt("1091")
		const address56ASF9 = accounts[2]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressbw590z, uintxOC4xwC, {from: accounts[0]});
		const boolBA8Rpdu = await DSPjipapgN.burnFrombyOwner.call(address0buhIy, uintDaFNZwW, {from: accounts[0]});
		const boolY2qcYB = await DSPjipapgN.transfer.call(address56ASF9, uintRbhYwLJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzXf4hf, true)
		await expect(DSPjipapgN.burnFrombyOwner.call(address0buhIy, uintDaFNZwW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const addressna5AdF0 = "0x0000000000000000000000000000000000000001"
		const addressREOFxat = accounts[0]
		const uintLv2ckgG = BigInt("1120")
		const addresssLbSDv = accounts[3]
		const addressk1FTz52 = accounts[0]
		const uintbEYluur = BigInt("82")
		const addresssJGCb2O = accounts[0]
		const uintACExpPY = BigInt("1242")
		const addressVgptL7m = accounts[5]
		const uint256FH7f9Dy = await DSPjipapgN.allowance.call(addressREOFxat, addressna5AdF0, {from: accounts[5]});
		const boolqdORvfE = await DSPjipapgN.transfer.call(addresssLbSDv, uintLv2ckgG, {from: accounts[0]});
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressk1FTz52, {from: accounts[4]});
		const boolMWlZ8Iu = await DSPjipapgN.burnFrombyOwner.call(addresssJGCb2O, uintbEYluur, {from: accounts[3]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressVgptL7m, uintACExpPY, {from: accounts[0]});

		assert.equal(boolqdORvfE, true)
		assert.equal(uint256FH7f9Dy, BigInt("0"))
		await expect(DSPjipapgN.addPauser.call(addressk1FTz52, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmZtnXUV = await DSP.new({from: accounts[3]});
		const uintFLtmXnI = BigInt("1200")
		const addresszxwndfS = accounts[4]
		const stringqC3ixAc = await DSPmZtnXUV.name.call({from: accounts[2]});
		const uint256azZFXTt = await DSPmZtnXUV.totalSupply.call({from: accounts[2]});
		const boolHpRFHxT = await DSPmZtnXUV.burnFrombyOwner.call(addresszxwndfS, uintFLtmXnI, {from: accounts[3]});

		assert.equal(stringqC3ixAc, "DSP")
		assert.equal(uint256azZFXTt, BigInt("100000000000000000000000000000"))
		await expect(DSPmZtnXUV.burnFrombyOwner.call(addresszxwndfS, uintFLtmXnI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uinteiS3BfF = BigInt("1107")
		const addressj3ZS2em = accounts[3]
		const addressBwEOGIS = accounts[0]
		const addresskWwKO75 = accounts[3]
		const addressTZp1Nac = "0x0000000000000000000000000000000000000001"
		const uintSfbZp9v = BigInt("1242")
		const addressPeoaaAR = accounts[5]
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressj3ZS2em, uinteiS3BfF, {from: accounts[0]});
		const uint256qAmNSG1 = await DSPjipapgN.balanceOf.call(addressBwEOGIS, {from: accounts[1]});
		const addressF0q7SkE = await DSPjipapgN.transferOwnership.call(addresskWwKO75, {from: accounts[0]});
		const booltsiVKq = await DSPjipapgN.freezeAccount.call(addressTZp1Nac, {from: accounts[2]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressPeoaaAR, uintSfbZp9v, {from: accounts[0]});

		assert.equal(boolqdORvfE, true)
		assert.equal(uint256qAmNSG1, BigInt("100000000000000000000000000000"))
		await expect(DSPjipapgN.freezeAccount.call(addressTZp1Nac, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uinttUDkCq = BigInt("889")
		const addressMq714Q = accounts[0]
		const uinttT76wWf = BigInt("1107")
		const addressHpRuyUi = accounts[3]
		const addresslrA9fvx = accounts[1]
		const addressoTG8AVN = accounts[3]
		const addressMDnggs = accounts[5]
		const addresskTTVpJH = "0x0000000000000000000000000000000000000001"
		const uintL7LVRV = BigInt("1242")
		const addressxb3j0f0 = accounts[5]
		const boolD3akeUK = await DSPjipapgN.unlock.call(addressMq714Q, uinttUDkCq, {from: accounts[0]});
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressHpRuyUi, uinttT76wWf, {from: accounts[0]});
		const uint256qAmNSG1 = await DSPjipapgN.balanceOf.call(addresslrA9fvx, {from: accounts[1]});
		const addressF0q7SkE = await DSPjipapgN.transferOwnership.call(addressoTG8AVN, {from: accounts[0]});
		const boolZVtW9fx = await DSPjipapgN.isOwner.call(addressMDnggs, {from: accounts[3]});
		const booltsiVKq = await DSPjipapgN.freezeAccount.call(addresskTTVpJH, {from: accounts[2]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressxb3j0f0, uintL7LVRV, {from: accounts[0]});

		await expect(DSPjipapgN.unlock.call(addressMq714Q, uinttUDkCq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uint7LZXlz = BigInt("1107")
		const addresswdp5YoS = accounts[3]
		const addressdimfep = accounts[1]
		const addressDT9CMzp = accounts[0]
		const uintN0lbu7 = BigInt("1196")
		const addressKBGCXwb = accounts[1]
		const uintf9J4bZn = BigInt("2030")
		const addresssT0mHV = accounts[2]
		const addressOnaPUEe = accounts[3]
		const addressLslv2oM = "0x0000000000000000000000000000000000000001"
		const uintmZ9hSH7 = BigInt("468")
		const uintxLjFWka = BigInt("1385")
		const addressPRMJdkI = accounts[4]
		const uintzJvuIrE = BigInt("1242")
		const addressG7MrnCI = accounts[5]
		const addressbzkDFLf = accounts[4]
		const boolqdORvfE = await DSPjipapgN.transfer.call(addresswdp5YoS, uint7LZXlz, {from: accounts[0]});
		const uint256qAmNSG1 = await DSPjipapgN.balanceOf.call(addressdimfep, {from: accounts[1]});
		const uint8vI3NzZ = await DSPjipapgN.decimals.call({from: accounts[1]});
		const addressBIZsNTX = await DSPjipapgN.addPauser.call(addressDT9CMzp, {from: accounts[4]});
		const boolUZLQ1eC = await DSPjipapgN.unlock.call(addressKBGCXwb, uintN0lbu7, {from: accounts[4]});
		const bool1e9KLE = await DSPjipapgN.transfer.call(addresssT0mHV, uintf9J4bZn, {from: accounts[5]});
		const addressF0q7SkE = await DSPjipapgN.transferOwnership.call(addressOnaPUEe, {from: accounts[0]});
		const booltsiVKq = await DSPjipapgN.freezeAccount.call(addressLslv2oM, {from: accounts[2]});
		const boolqvQFPf = await DSPjipapgN.lock.call(addressPRMJdkI, uintxLjFWka, uintmZ9hSH7, {from: accounts[0]});
		await DSPjipapgN.onlyOwner.call({from: accounts[3]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addressG7MrnCI, uintzJvuIrE, {from: accounts[0]});
		const boolVsL9Mv = await DSPjipapgN.unfreezeAccount.call(addressbzkDFLf, {from: accounts[0]});

		assert.equal(boolqdORvfE, true)
		assert.equal(uint256qAmNSG1, BigInt("0"))
		assert.equal(uint8vI3NzZ, BigInt("18"))
		await expect(DSPjipapgN.addPauser.call(addressDT9CMzp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintFjXmcQu = BigInt("1239")
		const addresstAUBgk6 = accounts[5]
		const uintuuCBdmy = BigInt("1091")
		const address5bFmBs = accounts[3]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresstAUBgk6, uintFjXmcQu, {from: accounts[0]});
		const stringubBYaL = await DSPjipapgN.symbol.call({from: accounts[2]});
		await DSPjipapgN.f.call({from: accounts[0]});
		const boolY2qcYB = await DSPjipapgN.transfer.call(address5bFmBs, uintuuCBdmy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzXf4hf, true)
		assert.equal(stringubBYaL, "DSP")
		await expect(DSPjipapgN.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintdJ7MVv = BigInt("1239")
		const addresstHS0FaR = accounts[6]
		const uintCAy3qsi = BigInt("402")
		const addressR72vaoA = accounts[2]
		const addressWpuLNK0 = accounts[5]
		const uintX9nmyE8 = BigInt("2047")
		const addresshQQEt3Y = accounts[3]
		const addressAGdFKlB = accounts[3]
		const uintPsZ5X8E = BigInt("1091")
		const addressTP4CbJx = accounts[2]
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresstHS0FaR, uintdJ7MVv, {from: accounts[0]});
		const bool1yfHG5 = await DSPjipapgN.transferFrom.call(addressWpuLNK0, addressR72vaoA, uintCAy3qsi, {from: accounts[1]});
		const booliIhvrx8 = await DSPjipapgN.transferFrom.call(addressAGdFKlB, addresshQQEt3Y, uintX9nmyE8, {from: accounts[2]});
		const boolY2qcYB = await DSPjipapgN.transfer.call(addressTP4CbJx, uintPsZ5X8E, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzXf4hf, true)
		await expect(DSPjipapgN.transferFrom.call(addressWpuLNK0, addressR72vaoA, uintCAy3qsi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uint1ZTr4L = BigInt("1107")
		const addressn69FThI = accounts[3]
		const addressZlKVP9h = accounts[3]
		const addressZeCEch = accounts[0]
		const addressI17fsmU = accounts[1]
		const addressr4goICm = "0x0000000000000000000000000000000000000001"
		const boolqdORvfE = await DSPjipapgN.transfer.call(addressn69FThI, uint1ZTr4L, {from: accounts[0]});
		const addresslchtR2B = await DSPjipapgN.addPauser.call(addressZlKVP9h, {from: accounts[0]});
		const uint256ZkeyTbw = await DSPjipapgN.balanceOf.call(addressZeCEch, {from: accounts[2]});
		const boolvOJEHtN = await DSPjipapgN.unfreezeAccount.call(addressI17fsmU, {from: accounts[4]});
		const addressdw0rKQy = await DSPjipapgN.transferOwnership.call(addressr4goICm, {from: accounts[1]});
		await DSPjipapgN.renouncePauser.call({from: accounts[4]});

		assert.equal(boolqdORvfE, true)
		assert.equal(uint256ZkeyTbw, BigInt("100000000000000000000000000000"))
		await expect(DSPjipapgN.unfreezeAccount.call(addressI17fsmU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintuHPIbuy = BigInt("1295")
		const addressF664TU3 = accounts[3]
		const uintKnTDFPC = BigInt("1723")
		const addresszhj2Qzj = accounts[5]
		const uintE6nOvfo = BigInt("1091")
		const addressSyZ6vg = accounts[2]
		const boolC1VRhW8 = await DSPjipapgN.mint.call(addressF664TU3, uintuHPIbuy, {from: accounts[0]});
		const boolzXf4hf = await DSPjipapgN.increaseAllowance.call(addresszhj2Qzj, uintKnTDFPC, {from: accounts[0]});
		const boolY2qcYB = await DSPjipapgN.transfer.call(addressSyZ6vg, uintE6nOvfo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolC1VRhW8, true)
		assert.equal(boolzXf4hf, true)
		await expect(DSPjipapgN.transfer.call(addressSyZ6vg, uintE6nOvfo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPh0vJzG4 = await DSP.new({from: accounts[0]});
		const addressCoYpsx = accounts[2]
		const uintVAQLCYp = BigInt("834")
		const addressZ3fP4y5 = accounts[4]
		const addressnwfH7pW = await DSPh0vJzG4.transferOwnership.call(addressCoYpsx, {from: accounts[0]});
		const boolGEFWzl7 = await DSPh0vJzG4.decreaseAllowance.call(addressZ3fP4y5, uintVAQLCYp, {from: accounts[2]});
		await DSPh0vJzG4.whenNotPaused.call({from: accounts[2]});

		await expect(DSPh0vJzG4.decreaseAllowance.call(addressZ3fP4y5, uintVAQLCYp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const uintqZ03IT = BigInt("1324")
		const uintEZ21GeN = BigInt("694")
		const addressp1N1Clu = accounts[2]
		const addresstDUwAjR = accounts[3]
		const boolZy9IaTX = await DSPjipapgN.transferWithLock.call(addressp1N1Clu, uintEZ21GeN, uintqZ03IT, {from: accounts[0]});
		const uint256AhYDdKK = await DSPjipapgN.balanceOf.call(addresstDUwAjR, {from: accounts[0]});

		assert.equal(boolZy9IaTX, true)
		assert.equal(uint256AhYDdKK, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const addressPimeeV6 = accounts[1]
		const uintrpQEnpA = BigInt("211")
		const addressS91zpVx = accounts[1]
		const addressCzzlTB = "0x0000000000000000000000000000000000000001"
		const uintBJBt75L = BigInt("214")
		const addressKHmJF1W = accounts[4]
		const boolUfE3YEE = await DSPjipapgN.unfreezeAccount.call(addressPimeeV6, {from: accounts[0]});
		const boolhbXP2lF = await DSPjipapgN.transferFrom.call(addressCzzlTB, addressS91zpVx, uintrpQEnpA, {from: accounts[3]});
		const boolUhzxYRH = await DSPjipapgN.unlock.call(addressKHmJF1W, uintBJBt75L, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPjipapgN.unfreezeAccount.call(addressPimeeV6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjipapgN = await DSP.new({from: accounts[0]});
		const addressI1JZjNG = "0x0000000000000000000000000000000000000001"
		const addressG4R9Nef = accounts[3]
		const uintbYdjkz6 = BigInt("300")
		const uintkoQVg8E = BigInt("505")
		const addressGRuSxgE = "0x0000000000000000000000000000000000000001"
		const boolD2hQB5G = await DSPjipapgN.isPauser.call(addressI1JZjNG, {from: accounts[3]});
		const uint256AhYDdKK = await DSPjipapgN.balanceOf.call(addressG4R9Nef, {from: accounts[0]});
		const boolyxKs8Ej = await DSPjipapgN.lock.call(addressGRuSxgE, uintkoQVg8E, uintbYdjkz6, {from: accounts[0]});

		assert.equal(boolD2hQB5G, false)
		assert.equal(uint256AhYDdKK, BigInt("0"))
		await expect(DSPjipapgN.lock.call(addressGRuSxgE, uintkoQVg8E, uintbYdjkz6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPI1uwMo = await DSP.new({from: accounts[2]});
		const addressGjCFs50 = accounts[3]
		const uintY6KixxM = BigInt("1599")
		const addressIz4IqXN = accounts[4]
		const uintLEEXQGB = BigInt("1044")
		const addresshgQWzB = accounts[4]
		const addressbL3xSym = await DSPI1uwMo.upgradeTo.call(addressGjCFs50, {from: accounts[2]});
		const boolOgD5JoC = await DSPI1uwMo.transfer.call(addressIz4IqXN, uintY6KixxM, {from: accounts[3]});
		const boolpoftBSg = await DSPI1uwMo.approve.call(addresshgQWzB, uintLEEXQGB, {from: accounts[2]});

		await expect(DSPI1uwMo.transfer.call(addressIz4IqXN, uintY6KixxM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})