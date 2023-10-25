const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintgyzjW9l = BigInt("601")
		const uintZgKEpcX = BigInt("434")
		const uinteYdrP0E = BigInt("1012")
		const addresseGF4dUr = accounts[3]
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintgyzjW9l, {from: accounts[1]});
		const addresspbT2vC = await KPLAYLKsFVQg.lockAfter.call(addresseGF4dUr, uinteYdrP0E, uintZgKEpcX, {from: accounts[0]});
		await KPLAYLKsFVQg.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256v5ctJTF, BigInt("1630228725"))
		await expect(KPLAYLKsFVQg.lockAfter.call(addresseGF4dUr, uinteYdrP0E, uintZgKEpcX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYZWoudGK = await KPLAY.new({from: accounts[0]});
		const uintuUqyGta = BigInt("2033")
		const addresstQjPrCN = accounts[4]
		const addressWeoOehr = accounts[1]
		const addressBPJZTL = "0x0000000000000000000000000000000000000001"
		await KPLAYZWoudGK.lockState.call(addresstQjPrCN, uintuUqyGta, {from: accounts[0]});
		const uint2563ORhlb = await KPLAYZWoudGK.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BZtyml = await KPLAYZWoudGK.lockCount.call(addressWeoOehr, {from: accounts[2]});
		const addressypOLwzi = await KPLAYZWoudGK.transferOwnership.call(addressBPJZTL, {from: accounts[5]});
		await KPLAYZWoudGK.onlyOwner.call({from: accounts[1]});

		await expect(KPLAYZWoudGK.lockState.call(addresstQjPrCN, uintuUqyGta, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTteNOAI = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		await KPLAYTteNOAI.unpause.call({from: accounts[5]});
		await KPLAYTteNOAI.whenNotPaused.call({from: accounts[3]});
		const uint256BulXU9q = await KPLAYTteNOAI.currentTime.call({from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYhunTCs8 = await KPLAY.new({from: accounts[3]});
		const addresswcRSDQB = accounts[1]
		const addressnzlZTuR = accounts[2]
		const uintCSyj5JC = BigInt("813")
		const addressAwaElSi = accounts[2]
		const addressq6cyYQS = accounts[1]
		const addresstW3RTVw = accounts[2]
		const uintlS2AyEH = BigInt("463")
		const addresshkkGFHv = accounts[4]
		const boolE52ywm = await KPLAYhunTCs8.isFrozen.call(addresswcRSDQB, {from: accounts[1]});
		const addressSxQRPe9 = await KPLAYhunTCs8.unfreeze.call(addressnzlZTuR, {from: accounts[1]});
		const boolfEX940B = await KPLAYhunTCs8.approve.call(addressAwaElSi, uintCSyj5JC, {from: "0x0000000000000000000000000000000000000001"});
		const addressqwq5v5B = await KPLAYhunTCs8.freeze.call(addressq6cyYQS, {from: accounts[1]});
		const addressRDO9LzL = await KPLAYhunTCs8.freeze.call(addresstW3RTVw, {from: accounts[0]});
		const addressxyTS0S3 = await KPLAYhunTCs8.unlock.call(addresshkkGFHv, uintlS2AyEH, {from: accounts[3]});

		assert.equal(boolE52ywm, false)
		await expect(KPLAYhunTCs8.unfreeze.call(addressnzlZTuR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const uintCW1eFdm = BigInt("306")
		const addressR6QCorH = accounts[3]
		const addressajDveN = accounts[3]
		const uintSxhN6T9 = BigInt("1666")
		const addresstsFlEW = accounts[2]
		const addresskoYLFux = accounts[4]
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(addressR6QCorH, uintCW1eFdm, {from: accounts[2]});
		const addresstpHhWEn = await KPLAYumBl3Se.transferOwnership.call(addressajDveN, {from: accounts[0]});
		await KPLAYumBl3Se.whenNotFrozen.call({from: accounts[1]});
		const addressHhbpQdB = await KPLAYumBl3Se.burn.call(addresstsFlEW, uintSxhN6T9, {from: accounts[1]});
		await KPLAYumBl3Se.onlyOwner.call({from: accounts[1]});
		const uint256tBmiVX9 = await KPLAYumBl3Se.balanceOf.call(addresskoYLFux, {from: accounts[3]});

		await expect(KPLAYumBl3Se.transfer.call(addressR6QCorH, uintCW1eFdm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintlA9reCb = BigInt("601")
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintlA9reCb, {from: accounts[1]});
		const uint256CQxF8G2 = await KPLAYLKsFVQg.totalSupply.call({from: accounts[4]});

		assert.equal(uint256CQxF8G2, BigInt("10000000000000000"))
		assert.equal(uint256v5ctJTF, BigInt("1630228709"))
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintnDVTbJS = BigInt("601")
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintnDVTbJS, {from: accounts[1]});
		await KPLAYLKsFVQg.whenPaused.call({from: accounts[4]});
		await KPLAYLKsFVQg.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256v5ctJTF, BigInt("1630228723"))
		await expect(KPLAYLKsFVQg.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintn847GUz = BigInt("1186")
		const addressUkPbkS0 = accounts[0]
		const uintpGruCDE = BigInt("602")
		const uintpCZsQud = BigInt("49")
		const uintNYczd1j = BigInt("1890")
		const addressMCMnZP = accounts[2]
		const boolI1RUvCo = await KPLAYLKsFVQg.decreaseAllowance.call(addressUkPbkS0, uintn847GUz, {from: accounts[3]});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintpGruCDE, {from: accounts[1]});
		const boolKPeOTVd = await KPLAYLKsFVQg.transferWithLockAfter.call(addressMCMnZP, uintNYczd1j, uintpCZsQud, {from: accounts[4]});
		await KPLAYLKsFVQg.renounceOwnership.call({from: accounts[4]});

		await expect(KPLAYLKsFVQg.decreaseAllowance.call(addressUkPbkS0, uintn847GUz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uint3uRIP4 = BigInt("755")
		const uintW37wdI7 = BigInt("1854")
		const addresskVB2EyI = accounts[5]
		const uintJCIPSQ8 = BigInt("638")
		const boolVrivZf9 = await KPLAYLKsFVQg.transferWithLockAfter.call(addresskVB2EyI, uintW37wdI7, uint3uRIP4, {from: accounts[3]});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintJCIPSQ8, {from: accounts[1]});
		await KPLAYLKsFVQg.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolVrivZf9, true)
		assert.equal(uint256v5ctJTF, BigInt("1630228749"))
		await expect(KPLAYLKsFVQg.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYz7AAWT1 = await KPLAY.new({from: accounts[4]});
		const uintGno2xpo = BigInt("473")
		const addressnuhmlTt = accounts[2]
		const addresshstTq8g = accounts[1]
		const bool7rkJKd = await KPLAYz7AAWT1.approve.call(addressnuhmlTt, uintGno2xpo, {from: accounts[5]});
		const addressXf5Z4h = await KPLAYz7AAWT1.freeze.call(addresshstTq8g, {from: accounts[1]});

		assert.equal(bool7rkJKd, true)
		await expect(KPLAYz7AAWT1.freeze.call(addresshstTq8g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const addresssBP3lm3 = accounts[0]
		const uintyx1bJFg = BigInt("601")
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addresssBP3lm3, {from: accounts[0]});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintyx1bJFg, {from: accounts[1]});

		assert.equal(uint256YoplJ4F, BigInt("0"))
		assert.equal(uint256v5ctJTF, BigInt("1630228700"))
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const addressLFFtePw = accounts[3]
		const addresswSFaEQH = accounts[1]
		const uintdrfVu7m = BigInt("306")
		const addressTDEr97 = accounts[4]
		const uintzX3hEkF = BigInt("1170")
		const addressaCo1UDR = accounts[2]
		const addressxEoWvKA = accounts[4]
		const uint256WkWdkbL = await KPLAYumBl3Se.allowance.call(addresswSFaEQH, addressLFFtePw, {from: "0x0000000000000000000000000000000000000001"});
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(addressTDEr97, uintdrfVu7m, {from: accounts[2]});
		const addressHhbpQdB = await KPLAYumBl3Se.burn.call(addressaCo1UDR, uintzX3hEkF, {from: accounts[1]});
		const uint256tBmiVX9 = await KPLAYumBl3Se.balanceOf.call(addressxEoWvKA, {from: accounts[3]});

		assert.equal(uint256WkWdkbL, BigInt("0"))
		await expect(KPLAYumBl3Se.transfer.call(addressTDEr97, uintdrfVu7m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintrnzSSGg = BigInt("1705")
		const addressR4OiNtd = accounts[3]
		const address5sPwrc = accounts[2]
		const uintjJ00AJV = BigInt("1741")
		const bools236TUP = await KPLAYLKsFVQg.transferFrom.call(address5sPwrc, addressR4OiNtd, uintrnzSSGg, {from: accounts[5]});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintjJ00AJV, {from: accounts[1]});

		await expect(KPLAYLKsFVQg.transferFrom.call(address5sPwrc, addressR4OiNtd, uintrnzSSGg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintDRHfRi6 = BigInt("811")
		const addressr9h2Ro7 = accounts[2]
		const uintm3zbdeU = BigInt("110")
		const addressgrFyHrt = accounts[2]
		const uintPYMgXe9 = BigInt("590")
		const addressb18LU9Y = await KPLAYLKsFVQg.unlock.call(addressr9h2Ro7, uintDRHfRi6, {from: accounts[3]});
		const addressfmM2Ibs = await KPLAYLKsFVQg.unlock.call(addressgrFyHrt, uintm3zbdeU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintPYMgXe9, {from: accounts[1]});

		await expect(KPLAYLKsFVQg.unlock.call(addressr9h2Ro7, uintDRHfRi6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintmzgZYBZ = BigInt("1695")
		const addressWtEkmzi = "0x0000000000000000000000000000000000000001"
		const uintlpAO84c = BigInt("586")
		const boolYXt4Fa3 = await KPLAYLKsFVQg.increaseAllowance.call(addressWtEkmzi, uintmzgZYBZ, {from: accounts[4]});
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintlpAO84c, {from: accounts[1]});

		assert.equal(boolYXt4Fa3, true)
		assert.equal(uint256v5ctJTF, BigInt("1630228704"))
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintHnzgPy3 = BigInt("595")
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintHnzgPy3, {from: accounts[1]});
		const uint256TWQZf3G = await KPLAYLKsFVQg.currentTime.call({from: accounts[2]});

		assert.equal(uint256TWQZf3G, BigInt("1630228113"))
		assert.equal(uint256v5ctJTF, BigInt("1630228708"))
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uinttlEblcA = BigInt("596")
		const addressRQwN81S = accounts[5]
		const uint7e8c04 = BigInt("1081")
		const addressIpUAwbg = accounts[2]
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uinttlEblcA, {from: accounts[1]});
		await KPLAYLKsFVQg.pause.call({from: accounts[3]});
		const addressRbIoUTJ = await KPLAYLKsFVQg.transferOwnership.call(addressRQwN81S, {from: accounts[1]});
		await KPLAYLKsFVQg.lockState.call(addressIpUAwbg, uint7e8c04, {from: accounts[0]});

		assert.equal(uint256v5ctJTF, BigInt("1630228697"))
		await expect(KPLAYLKsFVQg.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const addressfD3NYLw = accounts[2]
		const uintGFZyePV = BigInt("301")
		const addressPw0l0Zn = accounts[3]
		const uint256aL1ykuk = await KPLAYumBl3Se.lockCount.call(addressfD3NYLw, {from: "0x0000000000000000000000000000000000000001"});
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(addressPw0l0Zn, uintGFZyePV, {from: accounts[2]});

		assert.equal(uint256aL1ykuk, BigInt("0"))
		await expect(KPLAYumBl3Se.transfer.call(addressPw0l0Zn, uintGFZyePV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintjg3qHEP = BigInt("597")
		const uintog220b = BigInt("1367")
		const addressOcTgfLB = accounts[1]
		const uintq6LEd8h = BigInt("1118")
		const addressGtVHSd2 = accounts[2]
		const addressTVvtMDg = accounts[1]
		const boolxjjquNU = await KPLAYLKsFVQg.transferWithLock.call(addressOcTgfLB, uintog220b, uintjg3qHEP, {from: accounts[3]});
		await KPLAYLKsFVQg.lockState.call(addressGtVHSd2, uintq6LEd8h, {from: accounts[0]});
		await KPLAYLKsFVQg.whenNotFrozen.call({from: accounts[3]});
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addressTVvtMDg, {from: accounts[0]});

		assert.equal(boolxjjquNU, true)
		await expect(KPLAYLKsFVQg.lockState.call(addressGtVHSd2, uintq6LEd8h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const addressLxgqX52 = accounts[5]
		const uintrJutqaF = BigInt("1123")
		const addressFz6YOVb = accounts[0]
		const uint256GE04bnZ = await KPLAYLKsFVQg.balanceOf.call(addressLxgqX52, {from: accounts[1]});
		const boold4SuyQk = await KPLAYLKsFVQg.mint.call(addressFz6YOVb, uintrJutqaF, {from: accounts[3]});
		await KPLAYLKsFVQg.onlyOwner.call({from: accounts[2]});

		assert.equal(boold4SuyQk, true)
		assert.equal(uint256GE04bnZ, BigInt("0"))
		await expect(KPLAYLKsFVQg.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintMG3jvAx = BigInt("1220")
		const uintGkNglvF = BigInt("319")
		const addressMUUPJz = accounts[0]
		const uintzyky2Mq = BigInt("24")
		const addressvYdwqbB = accounts[5]
		const addressq2qYuhx = accounts[1]
		await KPLAYLKsFVQg.renounceOwnership.call({from: accounts[3]});
		const addressrFDvsk9 = await KPLAYLKsFVQg.lock.call(addressMUUPJz, uintGkNglvF, uintMG3jvAx, {from: accounts[4]});
		await KPLAYLKsFVQg.lockState.call(addressvYdwqbB, uintzyky2Mq, {from: accounts[2]});
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addressq2qYuhx, {from: accounts[0]});

		await expect(KPLAYLKsFVQg.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const addressCbo9f0S = accounts[0]
		const uintreTXU0B = BigInt("342")
		const uintBA9CWeU = BigInt("668")
		const addressTdmSBOZ = accounts[1]
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addressCbo9f0S, {from: accounts[0]});
		const address5OVKxC = await KPLAYLKsFVQg.lockAfter.call(addressTdmSBOZ, uintBA9CWeU, uintreTXU0B, {from: accounts[3]});

		assert.equal(uint256YoplJ4F, BigInt("0"))
		await expect(KPLAYLKsFVQg.lockAfter.call(addressTdmSBOZ, uintBA9CWeU, uintreTXU0B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintnYhJ1PX = BigInt("1556")
		const uintAygkDCI = BigInt("925")
		const uintvtq2S7n = BigInt("1283")
		const addressUAWNIro = accounts[0]
		const uintjb7UYer = BigInt("1644")
		const uintfKwGRsW = BigInt("349")
		const addressszvtZTi = accounts[0]
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintnYhJ1PX, {from: accounts[1]});
		const addresseJWfBDg = await KPLAYLKsFVQg.lock.call(addressUAWNIro, uintvtq2S7n, uintAygkDCI, {from: accounts[3]});
		const boolQvKl9m8 = await KPLAYLKsFVQg.transferWithLockAfter.call(addressszvtZTi, uintfKwGRsW, uintjb7UYer, {from: accounts[2]});

		assert.equal(uint256v5ctJTF, BigInt("1630229661"))
		await expect(KPLAYLKsFVQg.lock.call(addressUAWNIro, uintvtq2S7n, uintAygkDCI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const addressb0x8KKN = accounts[0]
		const addressromC5ws = accounts[4]
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addressb0x8KKN, {from: accounts[0]});
		const addressunBKimN = await KPLAYLKsFVQg.unfreeze.call(addressromC5ws, {from: accounts[3]});

		assert.equal(uint256YoplJ4F, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const addressnkX2F6v = accounts[4]
		const uintTd8fLfk = BigInt("1058")
		const addresspwXfmnJ = accounts[4]
		const address1GW7dH = accounts[1]
		const uintKdxaP5t = BigInt("306")
		const addressyqfVt6R = accounts[4]
		const addressZ90JrR = await KPLAYumBl3Se.transferOwnership.call(addressnkX2F6v, {from: accounts[3]});
		const boolR2lWK6x = await KPLAYumBl3Se.transferFrom.call(address1GW7dH, addresspwXfmnJ, uintTd8fLfk, {from: accounts[4]});
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(addressyqfVt6R, uintKdxaP5t, {from: accounts[2]});

		await expect(KPLAYumBl3Se.transferFrom.call(address1GW7dH, addresspwXfmnJ, uintTd8fLfk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const addressq2rNgyo = accounts[4]
		const addressGaTjIjD = accounts[1]
		const addressqlpo4JK = await KPLAYLKsFVQg.freeze.call(addressq2rNgyo, {from: accounts[3]});
		const uint256YoplJ4F = await KPLAYLKsFVQg.balanceOf.call(addressGaTjIjD, {from: accounts[0]});

		assert.equal(uint256YoplJ4F, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const addressLm4GV2H = accounts[1]
		const uintfceQ50 = BigInt("295")
		const addressUzuy3z4 = accounts[3]
		await KPLAYumBl3Se.unpause.call({from: accounts[3]});
		const boolCdb52gK = await KPLAYumBl3Se.isFrozen.call(addressLm4GV2H, {from: accounts[3]});
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(addressUzuy3z4, uintfceQ50, {from: accounts[2]});

		await expect(KPLAYumBl3Se.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYumBl3Se = await KPLAY.new({from: accounts[3]});
		const uintAlUqIfh = BigInt("1895")
		const addressSqMc8m = accounts[4]
		const uintABqGuZb = BigInt("306")
		const address1IRReW = accounts[3]
		const addressXXEfBDt = await KPLAYumBl3Se.burn.call(addressSqMc8m, uintAlUqIfh, {from: accounts[3]});
		const boolN8dVsh2 = await KPLAYumBl3Se.transfer.call(address1IRReW, uintABqGuZb, {from: accounts[2]});

		await expect(KPLAYumBl3Se.burn.call(addressSqMc8m, uintAlUqIfh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLKsFVQg = await KPLAY.new({from: accounts[3]});
		const uintVUfv4FL = BigInt("1913")
		const uint6CBsx0 = BigInt("1095")
		const addressRcfqJA4 = accounts[3]
		const uint256v5ctJTF = await KPLAYLKsFVQg.afterTime.call(uintVUfv4FL, {from: accounts[1]});
		const addressZlsNslb = await KPLAYLKsFVQg.burn.call(addressRcfqJA4, uint6CBsx0, {from: accounts[3]});

		assert.equal(uint256v5ctJTF, BigInt("1630230020"))
	});
})