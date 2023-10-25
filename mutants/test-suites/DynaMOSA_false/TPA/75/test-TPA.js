const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringy6NqAr0 = "DLbmMxRnBh1rqlWz3brqud6ZN9OhhjejqlvUFhPWC73SH"
		const stringnOuW5n8 = "oya9gkthfqtZ89NSQM8lm4"
		const uinttppo1OV = BigInt("75")
		const TPAB3dBcE = await TPA.new(stringy6NqAr0, stringnOuW5n8, uinttppo1OV, {from: accounts[4]});
		const uintbNSzp8W = BigInt("1686")
		const addressCQni0kn = accounts[1]
		const uintSnQLk2m = BigInt("546")
		const addressHXujcqF = accounts[3]
		const boolQePvw9D = await TPAB3dBcE.approve.call(addressCQni0kn, uintbNSzp8W, {from: accounts[1]});
		const boolY7mKg2D = await TPAB3dBcE.increaseAllowance.call(addressHXujcqF, uintSnQLk2m, {from: accounts[4]});
		const uint256ZoYnc8k = await TPAB3dBcE.totalSupply.call({from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAVG0wxS = await TPA.new({from: accounts[0]});
		const addressKBqx6G = accounts[0]
		const uintqpZLbm = BigInt("1955")
		const addressOx1nqcp = accounts[1]
		const addressqVFZEc4 = accounts[2]
		const uintF1GlGt5 = BigInt("1616")
		const addressUzWm6EH = accounts[5]
//		await TPAVG0wxS.whenPaused.call({from: accounts[4]});
//		const addressogLYlGJ = await TPAVG0wxS.removeAdmin.call(addressKBqx6G, {from: accounts[2]});
//		await TPAVG0wxS.pause.call({from: accounts[5]});
//		const boolLGARk4K = await TPAVG0wxS.unlock.call(addressOx1nqcp, uintqpZLbm, {from: accounts[3]});
//		const uint256ijw7pD = await TPAVG0wxS.balanceOf.call(addressqVFZEc4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLm6xvTt = await TPAVG0wxS.approve.call(addressUzWm6EH, uintF1GlGt5, {from: accounts[0]});

		await expect(TPAVG0wxS.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintfx64ns0 = BigInt("382")
		const addressP18JNpQ = accounts[2]
		const uintoGwVh1W = BigInt("1353")
		const addresspvlUeod = accounts[4]
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addressP18JNpQ, uintfx64ns0, {from: accounts[2]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addresspvlUeod, uintoGwVh1W, {from: accounts[3]});

		assert.equal(boolOwGEznL, true)
		await expect(TPAZzSZTDC.unlock.call(addresspvlUeod, uintoGwVh1W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWqRBBIg = await TPA.new({from: accounts[0]});
		const uintZqo3CJa = BigInt("988")
		const addresssIUvNvE = accounts[1]
		const addressG6K6jP9 = accounts[3]
		const uintCoIzOvb = BigInt("1581")
		const addresslilhqKI = accounts[3]
		const addressRwSgbm0 = accounts[3]
		const uintrx8SEf7 = BigInt("246")
		const addressqXih4j = accounts[4]
		const addressV0MqDxx = accounts[0]
//		const booljSPKpxt = await TPAWqRBBIg.decreaseAllowance.call(addresssIUvNvE, uintZqo3CJa, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iVusMut = await TPAWqRBBIg.balanceOf.call(addressG6K6jP9, {from: accounts[1]});
//		const boolVkexxy6 = await TPAWqRBBIg.transferFrom.call(addressRwSgbm0, addresslilhqKI, uintCoIzOvb, {from: accounts[2]});
//		const boolbSeNnB = await TPAWqRBBIg.increaseAllowance.call(addressqXih4j, uintrx8SEf7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xuyBiFd = await TPAWqRBBIg.balanceOf.call(addressV0MqDxx, {from: accounts[2]});

		await expect(TPAWqRBBIg.decreaseAllowance.call(addresssIUvNvE, uintZqo3CJa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintfnnu5p5 = BigInt("394")
		const addresstHmD5Ek = accounts[3]
		const addressaS2uq4p = accounts[1]
		const addresspo0BGHs = accounts[2]
		const uintyaFIR4E = BigInt("1353")
		const addressy82eC4 = accounts[4]
		const uint8ZlzDBOb = await TPAZzSZTDC.decimals.call({from: accounts[4]});
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addresstHmD5Ek, uintfnnu5p5, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressaS2uq4p, {from: accounts[3]});
//		await TPAZzSZTDC.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addresspo0BGHs, {from: accounts[4]});
//		await TPAZzSZTDC.pause.call({from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressy82eC4, uintyaFIR4E, {from: accounts[3]});

		assert.equal(boolOwGEznL, true)
		assert.equal(uint8ZlzDBOb, BigInt("18"))
		await expect(TPAZzSZTDC.addAdmin.call(addressaS2uq4p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addresskzikCWP = accounts[1]
		const uintcfpCOYV = BigInt("382")
		const addressTSWRehq = accounts[3]
		const addressATRUHH = accounts[1]
		const addressVgjYkcK = accounts[1]
		const uintUJwdPq9 = BigInt("1353")
		const addressFiw53F5 = accounts[4]
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addresskzikCWP, {from: accounts[2]});
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addressTSWRehq, uintcfpCOYV, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressATRUHH, {from: accounts[3]});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressVgjYkcK, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressFiw53F5, uintUJwdPq9, {from: accounts[3]});

		assert.equal(boolOwGEznL, true)
		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.addAdmin.call(addressATRUHH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintNCru6I6 = BigInt("353")
		const addressQx4lJyB = accounts[2]
		const uintVrnoLOp = BigInt("1353")
		const addressLnexp9a = accounts[4]
		const stringxIgBfuz = await TPAZzSZTDC.symbol.call({from: accounts[4]});
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addressQx4lJyB, uintNCru6I6, {from: accounts[2]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressLnexp9a, uintVrnoLOp, {from: accounts[3]});

		assert.equal(boolOwGEznL, true)
		assert.equal(stringxIgBfuz, "TPA")
		await expect(TPAZzSZTDC.unlock.call(addressLnexp9a, uintVrnoLOp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressIpHtcHN = "0x0000000000000000000000000000000000000001"
		const addressRLZnG6P = accounts[3]
		const addressvxnjdlj = accounts[3]
		const uintxkmEHHa = BigInt("382")
		const addressUKsNmcN = accounts[3]
		const boolrXpkySm = await TPAZzSZTDC.isOwner.call(addressIpHtcHN, {from: accounts[0]});
		const uint256FdQl4P6 = await TPAZzSZTDC.allowance.call(addressvxnjdlj, addressRLZnG6P, {from: accounts[4]});
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addressUKsNmcN, uintxkmEHHa, {from: accounts[2]});

		assert.equal(boolOwGEznL, true)
		assert.equal(boolrXpkySm, false)
		assert.equal(uint256FdQl4P6, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressa9rhDL8 = accounts[4]
		const uintzDm8s7V = BigInt("1346")
		const addressLAbqt1d = accounts[4]
		const uint8z2w5DnM = await TPAZzSZTDC.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfgGpPCI = await TPAZzSZTDC.unfreezeAccount.call(addressa9rhDL8, {from: accounts[0]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressLAbqt1d, uintzDm8s7V, {from: accounts[3]});

		assert.equal(uint8z2w5DnM, BigInt("18"))
		await expect(TPAZzSZTDC.unfreezeAccount.call(addressa9rhDL8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressdj5fZB = accounts[3]
		const addressD1a0K48 = accounts[1]
		const addressPvx1518 = accounts[1]
		const uintLQ45FS = BigInt("1315")
		const addresssXj6vdT = accounts[0]
		const addressJWontuU = accounts[1]
		const addresseMrSMDc = await TPAZzSZTDC.addAdmin.call(addressdj5fZB, {from: accounts[0]});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressD1a0K48, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressPvx1518, {from: accounts[3]});
//		const boole2oKIT9 = await TPAZzSZTDC.transfer.call(addresssXj6vdT, uintLQ45FS, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressJWontuU, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.addAdmin.call(addressPvx1518, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwxQS47a = await TPA.new({from: accounts[3]});
		const addressxYhn37L = accounts[3]
		const uintqkJn4IO = BigInt("967")
		const addressj3CsK0N = accounts[1]
		const addressrwMSPyt = accounts[1]
		const uintOa82kIP = BigInt("1062")
		const uintWhgLf2Q = BigInt("1245")
		const addressjL2OLcp = accounts[2]
		const boolQUlB225 = await TPAwxQS47a.isOwner.call(addressxYhn37L, {from: accounts[3]});
		const boolkkBRCrR = await TPAwxQS47a.increaseAllowance.call(addressj3CsK0N, uintqkJn4IO, {from: accounts[0]});
//		await TPAwxQS47a.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressLLeAeHe = await TPAwxQS47a.removeAdmin.call(addressrwMSPyt, {from: accounts[3]});
//		const uint256ITXYo1L = await TPAwxQS47a.burn.call(uintOa82kIP, {from: accounts[1]});
//		const boolmwES75s = await TPAwxQS47a.unlock.call(addressjL2OLcp, uintWhgLf2Q, {from: accounts[5]});

		assert.equal(boolQUlB225, true)
		assert.equal(boolkkBRCrR, true)
		await expect(TPAwxQS47a.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressQgaECbr = accounts[3]
		const addressuSONrvQ = accounts[1]
		const uintKPBAMgK = BigInt("766")
		const address5QzgfO = accounts[4]
		const addressF4WF4vz = accounts[1]
		const uintj2ArFYK = BigInt("1315")
		const addressdc5xMkb = accounts[0]
		const addressFhdJiaO = accounts[1]
		const addresseMrSMDc = await TPAZzSZTDC.addAdmin.call(addressQgaECbr, {from: accounts[0]});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressuSONrvQ, {from: accounts[2]});
//		const boolQ0Zdwfl = await TPAZzSZTDC.transfer.call(address5QzgfO, uintKPBAMgK, {from: accounts[2]});
//		await TPAZzSZTDC.whenPaused.call({from: accounts[4]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressF4WF4vz, {from: accounts[3]});
//		const boole2oKIT9 = await TPAZzSZTDC.transfer.call(addressdc5xMkb, uintj2ArFYK, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressFhdJiaO, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.transfer.call(address5QzgfO, uintKPBAMgK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressHXgtZkE = accounts[1]
		const uintWZB9V8c = BigInt("646")
		const addressDCEFhzW = accounts[4]
		const addressqbACEpl = accounts[5]
		const addresspTw4wEm = accounts[1]
		const addressFrXS8QV = accounts[1]
		const uintGt0eZXR = BigInt("1353")
		const addresswnbxpEj = accounts[4]
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressHXgtZkE, {from: accounts[2]});
//		const boolQqTh8Xe = await TPAZzSZTDC.transferFrom.call(addressqbACEpl, addressDCEFhzW, uintWZB9V8c, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addresspTw4wEm, {from: accounts[3]});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressFrXS8QV, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addresswnbxpEj, uintGt0eZXR, {from: accounts[3]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.transferFrom.call(addressqbACEpl, addressDCEFhzW, uintWZB9V8c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressH3hHtI5 = accounts[1]
		const uintPcWbIKj = BigInt("806")
		const addressEiVP1Qp = "0x0000000000000000000000000000000000000001"
		const addressTrrlwsE = accounts[1]
		const addressNt6G6Kb = accounts[2]
		const uintAAhtVvV = BigInt("975")
		const addressfa7FY7 = accounts[1]
		const uint5PbQPl = BigInt("1353")
		const addressHU4oexU = accounts[4]
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressH3hHtI5, {from: accounts[2]});
//		const addressDSHC77 = await TPAZzSZTDC.burnFrom.call(addressEiVP1Qp, uintPcWbIKj, {from: accounts[3]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressTrrlwsE, {from: accounts[3]});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressNt6G6Kb, {from: accounts[4]});
//		const bools1tKgcc = await TPAZzSZTDC.transfer.call(addressfa7FY7, uintAAhtVvV, {from: accounts[2]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressHU4oexU, uint5PbQPl, {from: accounts[3]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.burnFrom.call(addressEiVP1Qp, uintPcWbIKj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressLtGhLs = accounts[3]
		const addressfQtxSTy = accounts[1]
		const uintgWebfGR = BigInt("766")
		const addresstSK0Eyh = accounts[4]
		const addressyuuwwmP = accounts[1]
		const uintHB9N6yx = BigInt("1302")
		const addressdsHWidv = accounts[0]
		const uintaluX1cT = BigInt("1791")
		const addressPsfVTXM = accounts[0]
		const addressMYk888 = accounts[1]
		const addresseMrSMDc = await TPAZzSZTDC.addAdmin.call(addressLtGhLs, {from: accounts[0]});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressfQtxSTy, {from: accounts[2]});
//		await TPAZzSZTDC.renounceAdmin.call({from: accounts[5]});
//		await TPAZzSZTDC.unpause.call({from: accounts[4]});
//		const boolQ0Zdwfl = await TPAZzSZTDC.transfer.call(addresstSK0Eyh, uintgWebfGR, {from: accounts[2]});
//		await TPAZzSZTDC.whenPaused.call({from: accounts[4]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addressyuuwwmP, {from: accounts[3]});
//		const boole2oKIT9 = await TPAZzSZTDC.transfer.call(addressdsHWidv, uintHB9N6yx, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressKsEhB6X = await TPAZzSZTDC.burnFrom.call(addressPsfVTXM, uintaluX1cT, {from: "0x0000000000000000000000000000000000000001"});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressMYk888, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaytBTc = await TPAZzSZTDC.paused.call({from: accounts[0]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintWwL3FAz = BigInt("262")
		const uintdNbwdM7 = BigInt("208")
		const addressd9weRCV = accounts[0]
//		const uint256jRFQR2l = await TPAZzSZTDC.burn.call(uintWwL3FAz, {from: accounts[3]});
//		const boolfmv1nHk = await TPAZzSZTDC.transfer.call(addressd9weRCV, uintdNbwdM7, {from: accounts[0]});

		await expect(TPAZzSZTDC.burn.call(uintWwL3FAz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressIQMzM75 = accounts[1]
		const uintaRgVqY0 = BigInt("1921")
		const addresspQapIY2 = accounts[2]
		const uintShALypC = BigInt("382")
		const addressUvFCjRX = accounts[3]
		const addressgnLpGhk = accounts[5]
		const addressNU0WBig = accounts[1]
		const uintSYd7BNI = BigInt("2025")
		const addressunsqrvF = accounts[3]
		const uinta0cHMOq = BigInt("1353")
		const address9upGDX = accounts[4]
		const uintnbUch78 = BigInt("1870")
		const addressqsFnPTS = accounts[1]
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressIQMzM75, {from: accounts[2]});
		const boola9JiH0q = await TPAZzSZTDC.approve.call(addresspQapIY2, uintaRgVqY0, {from: "0x0000000000000000000000000000000000000001"});
		const boolOwGEznL = await TPAZzSZTDC.increaseAllowance.call(addressUvFCjRX, uintShALypC, {from: accounts[2]});
//		const addressK1pGRHB = await TPAZzSZTDC.transferOwnership.call(addressgnLpGhk, {from: accounts[1]});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressNU0WBig, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolB6qWUtS = await TPAZzSZTDC.decreaseAllowance.call(addressunsqrvF, uintSYd7BNI, {from: accounts[4]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(address9upGDX, uinta0cHMOq, {from: accounts[3]});
//		const boolXUmOdI3 = await TPAZzSZTDC.approve.call(addressqsFnPTS, uintnbUch78, {from: accounts[4]});

		assert.equal(boolOwGEznL, true)
		assert.equal(boola9JiH0q, true)
		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.transferOwnership.call(addressgnLpGhk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addresszgjqWbs = accounts[3]
		const addressNHCMfGb = accounts[2]
		const uintg33N9b1 = BigInt("766")
		const addressARF6pGE = accounts[4]
		const addresssZKbQ7 = accounts[1]
		const uintVhpB0uT = BigInt("1156")
		const addressS2LAN6r = accounts[5]
		const addressx1B8OU3 = accounts[0]
		const uintd5OEsFT = BigInt("1315")
		const addressBoNW8aO = accounts[0]
		const addressNgMXIvM = accounts[1]
		const addresseMrSMDc = await TPAZzSZTDC.addAdmin.call(addresszgjqWbs, {from: accounts[0]});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressNHCMfGb, {from: accounts[2]});
		const boola2SObQ = await TPAZzSZTDC.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolQ0Zdwfl = await TPAZzSZTDC.transfer.call(addressARF6pGE, uintg33N9b1, {from: accounts[2]});
//		await TPAZzSZTDC.whenPaused.call({from: accounts[4]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addresssZKbQ7, {from: accounts[3]});
//		const boolJLY8jOl = await TPAZzSZTDC.transferFrom.call(addressx1B8OU3, addressS2LAN6r, uintVhpB0uT, {from: accounts[2]});
//		await TPAZzSZTDC.pause.call({from: accounts[3]});
//		const boole2oKIT9 = await TPAZzSZTDC.transfer.call(addressBoNW8aO, uintd5OEsFT, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressNgMXIvM, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});

		assert.equal(boola2SObQ, false)
		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.transfer.call(addressARF6pGE, uintg33N9b1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintHCimZrU = BigInt("1363")
		const addressblZN2Yt = accounts[4]
		const stringrBMxLIZ = await TPAZzSZTDC.name.call({from: accounts[2]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressblZN2Yt, uintHCimZrU, {from: accounts[3]});

		assert.equal(stringrBMxLIZ, "TPA")
		await expect(TPAZzSZTDC.unlock.call(addressblZN2Yt, uintHCimZrU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressNkN0k55 = accounts[1]
		const addressoCaoltk = accounts[1]
		const uintHELiVVk = BigInt("646")
		const addressg7usGkb = accounts[4]
		const addressaKF61JD = accounts[5]
		const addresslyxzBUj = accounts[1]
		const addresssX5tL0m = accounts[0]
		const uintY75L1Dr = BigInt("1353")
		const addressum16Xxh = accounts[4]
		const addressEF1ANOA = accounts[5]
		const addressuBcPMWu = accounts[1]
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressNkN0k55, {from: accounts[2]});
//		const addresstYufzuG = await TPAZzSZTDC.removeAdmin.call(addressoCaoltk, {from: accounts[0]});
//		await TPAZzSZTDC.renounceAdmin.call({from: accounts[0]});
//		const boolQqTh8Xe = await TPAZzSZTDC.transferFrom.call(addressaKF61JD, addressg7usGkb, uintHELiVVk, {from: accounts[2]});
//		await TPAZzSZTDC.whenNotPaused.call({from: accounts[2]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addresslyxzBUj, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const addressmJCLFI = await TPAZzSZTDC.notFrozen.call(addresssX5tL0m, {from: accounts[4]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressum16Xxh, uintY75L1Dr, {from: accounts[3]});
//		const uint256OUUgIlX = await TPAZzSZTDC.balanceOf.call(addressEF1ANOA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgr8U3zH = await TPAZzSZTDC.isOwner.call(addressuBcPMWu, {from: accounts[2]});

		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.removeAdmin.call(addressoCaoltk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressxDHzwgE = accounts[0]
		const addressvEejgGe = accounts[1]
		const uintKqxGJgC = BigInt("1327")
		const addresstBDJzEQ = accounts[1]
		const addressw87iAHT = accounts[0]
		const uintnI48UoK = BigInt("646")
		const addressC0bYGB9 = accounts[4]
		const addressekUkXuK = accounts[5]
		const addresscnjxF6G = accounts[1]
		const addressymVi0L = accounts[1]
		const uintfN87if7 = BigInt("1210")
		const addressrykJGSE = accounts[4]
		const boolaIhkch2 = await TPAZzSZTDC.freezeAccount.call(addressxDHzwgE, {from: accounts[0]});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressvEejgGe, {from: accounts[2]});
//		const boolKMnXlfj = await TPAZzSZTDC.transferFrom.call(addressw87iAHT, addresstBDJzEQ, uintKqxGJgC, {from: accounts[2]});
//		const boolQqTh8Xe = await TPAZzSZTDC.transferFrom.call(addressekUkXuK, addressC0bYGB9, uintnI48UoK, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addresscnjxF6G, {from: accounts[3]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addressymVi0L, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressrykJGSE, uintfN87if7, {from: accounts[3]});

		assert.equal(boolaIhkch2, true)
		assert.equal(uint256ZU8QuSi, BigInt("0"))
		await expect(TPAZzSZTDC.transferFrom.call(addressw87iAHT, addresstBDJzEQ, uintKqxGJgC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const uintTkcWma = BigInt("900")
		const uintUXxKJVd = BigInt("2035")
		const addressf32gDsL = accounts[4]
		const uintJDTgI8T = BigInt("423")
		const addresstdJNO5D = accounts[4]
		const addresswaVZDjr = accounts[3]
		const addressqfBTew7 = accounts[6]
//		const boold31wuaw = await TPAZzSZTDC.lock.call(addressf32gDsL, uintUXxKJVd, uintTkcWma, {from: accounts[0]});
//		const boolfg6JEl = await TPAZzSZTDC.transferFrom.call(addresswaVZDjr, addresstdJNO5D, uintJDTgI8T, {from: accounts[5]});
//		const uint8YiZ9b9S = await TPAZzSZTDC.decimals.call({from: accounts[0]});
//		const uint256i3edVYj = await TPAZzSZTDC.balanceOf.call(addressqfBTew7, {from: accounts[4]});

		await expect(TPAZzSZTDC.lock.call(addressf32gDsL, uintUXxKJVd, uintTkcWma, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwWJZedz = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZ4r7a8F = BigInt("1356")
		const addressXaKv7XH = accounts[0]
		const addressTBmd84 = accounts[0]
		const uintJhiZGMg = BigInt("1344")
		const addressp3v6Wm3 = accounts[4]
		const stringhqoP3n8 = await TPAwWJZedz.name.call({from: accounts[4]});
		const bool2K3FBb = await TPAwWJZedz.transferFrom.call(addressTBmd84, addressXaKv7XH, uintZ4r7a8F, {from: accounts[3]});
		const boolQioyY0h = await TPAwWJZedz.transfer.call(addressp3v6Wm3, uintJhiZGMg, {from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressAelUg1p = accounts[1]
		const uintMc0e2vN = BigInt("646")
		const addressnhGxH0 = accounts[4]
		const addressTvWQSiM = accounts[5]
		const addresskJ5sI8o = accounts[1]
		const addresseZgImAg = accounts[1]
		const uintunYGf5v = BigInt("1353")
		const addressOjK7V0q = accounts[4]
		const stringm29QZTh = await TPAZzSZTDC.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZU8QuSi = await TPAZzSZTDC.balanceOf.call(addressAelUg1p, {from: accounts[2]});
		const uint256zcp8pZ4 = await TPAZzSZTDC.totalSupply.call({from: accounts[3]});
//		const boolQqTh8Xe = await TPAZzSZTDC.transferFrom.call(addressTvWQSiM, addressnhGxH0, uintMc0e2vN, {from: accounts[2]});
//		const addressFmiBDVd = await TPAZzSZTDC.addAdmin.call(addresskJ5sI8o, {from: accounts[3]});
//		const addressxove4TF = await TPAZzSZTDC.transferOwnership.call(addresseZgImAg, {from: accounts[4]});
//		const boolkDcUbqh = await TPAZzSZTDC.paused.call({from: accounts[3]});
//		const boolaQi2Ncz = await TPAZzSZTDC.unlock.call(addressOjK7V0q, uintunYGf5v, {from: accounts[3]});

		assert.equal(stringm29QZTh, "TPA")
		assert.equal(uint256ZU8QuSi, BigInt("0"))
		assert.equal(uint256zcp8pZ4, BigInt("10000000000000000000000000000"))
		await expect(TPAZzSZTDC.transferFrom.call(addressTvWQSiM, addressnhGxH0, uintMc0e2vN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPATprjeF = await TPA.new({from: accounts[4]});
		const addressRXxgia = accounts[4]
		const uintkPcqn8c = BigInt("633")
		const addressDCZ207q = accounts[3]
		const addresso2Mmz4o = accounts[3]
		const uinto1wvfVK = BigInt("1827")
		const addressSa4OS4F = accounts[3]
		const addressZk8Xx8j = await TPATprjeF.transferOwnership.call(addressRXxgia, {from: accounts[4]});
//		const boolHvFZfmB = await TPATprjeF.decreaseAllowance.call(addressDCZ207q, uintkPcqn8c, {from: accounts[2]});
//		const boolBcKFXOd = await TPATprjeF.unfreezeAccount.call(addresso2Mmz4o, {from: accounts[5]});
//		const uint256cF5SKcQ = await TPATprjeF.burn.call(uinto1wvfVK, {from: accounts[4]});
//		const boollBSkQYl = await TPATprjeF.isOwner.call(addressSa4OS4F, {from: accounts[4]});

		await expect(TPATprjeF.decreaseAllowance.call(addressDCZ207q, uintkPcqn8c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAiolRP6 = await TPA.new({from: accounts[5]});
		const uintaKMDh3 = BigInt("1981")
		const addressQuaQJeb = "0x0000000000000000000000000000000000000001"
//		await TPAiolRP6.pause.call({from: accounts[5]});
//		const boolzYpQ8iy = await TPAiolRP6.transfer.call(addressQuaQJeb, uintaKMDh3, {from: accounts[3]});

		await expect(TPAiolRP6.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZzSZTDC = await TPA.new({from: accounts[0]});
		const addressG2wBQ8y = accounts[1]
		const addressod87vJ2 = accounts[3]
		const uintamuMFG2 = BigInt("1351")
		const addresskLD9JmQ = accounts[3]
		const addressqJTotqz = "0x0000000000000000000000000000000000000001"
		const uint256h7fS6lh = await TPAZzSZTDC.balanceOf.call(addressG2wBQ8y, {from: accounts[0]});
		const addressdf58yMP = await TPAZzSZTDC.upgradeTo.call(addressod87vJ2, {from: accounts[0]});
//		const boolxxi63E = await TPAZzSZTDC.transferFrom.call(addressqJTotqz, addresskLD9JmQ, uintamuMFG2, {from: accounts[0]});

		assert.equal(uint256h7fS6lh, BigInt("0"))
		await expect(TPAZzSZTDC.transferFrom.call(addressqJTotqz, addresskLD9JmQ, uintamuMFG2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})