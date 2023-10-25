const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringehwRqUw = "Lhx54SD771L5cT92lVHwOBY4AeOX1c"
		const stringOkabt8t = "T9lAw"
		const uintwm7XmqH = BigInt("36")
		const TPAFdPxc9a = await TPA.new(stringehwRqUw, stringOkabt8t, uintwm7XmqH, {from: accounts[2]});
		const uintCoSLEK = BigInt("1959")
		const addressa952s4 = accounts[4]
		const stringrmTB4Ps = await TPAFdPxc9a.symbol.call({from: accounts[0]});
		const booljaTUj8Z = await TPAFdPxc9a.decreaseAllowance.call(addressa952s4, uintCoSLEK, {from: accounts[4]});
		const stringud5gkWi = await TPAFdPxc9a.name.call({from: accounts[1]});
		await TPAFdPxc9a.onlyAdmin.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const addressWqGxtNI = accounts[4]
		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJKSc5xL = await TPAtKBiFSG.name.call({from: accounts[4]});
//		const addresshKHFtF7 = await TPAtKBiFSG.addAdmin.call(addressWqGxtNI, {from: accounts[5]});

		assert.equal(boolOWj0ghf, false)
		assert.equal(stringJKSc5xL, "TPA")
		await expect(TPAtKBiFSG.addAdmin.call(addressWqGxtNI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAR2zhdFi = await TPA.new({from: accounts[0]});
		const addressMIrrccz = accounts[0]
		const addressremwFEw = accounts[3]
		const uintpKFHdS = BigInt("695")
		const uintENTD4wu = BigInt("734")
		const addressobBhHg = accounts[0]
		const addressofm2ZYC = accounts[4]
		const addressMmhJR8U = accounts[1]
		const uint7zJpuX = BigInt("1061")
		const addressa4O70a = accounts[0]
		const uint256qthEbiD = await TPAR2zhdFi.totalSupply.call({from: accounts[0]});
//		const boolQXfUnVI = await TPAR2zhdFi.unfreezeAccount.call(addressMIrrccz, {from: accounts[3]});
//		const addresshIhdgEg = await TPAR2zhdFi.removeAdmin.call(addressremwFEw, {from: accounts[1]});
//		const boolCZmf54b = await TPAR2zhdFi.transferWithLock.call(addressobBhHg, uintENTD4wu, uintpKFHdS, {from: accounts[3]});
//		const uint256XPlXL3q = await TPAR2zhdFi.allowance.call(addressMmhJR8U, addressofm2ZYC, {from: accounts[0]});
//		const booldrxbGw3 = await TPAR2zhdFi.transfer.call(addressa4O70a, uint7zJpuX, {from: accounts[4]});

		assert.equal(uint256qthEbiD, BigInt("10000000000000000000000000000"))
		await expect(TPAR2zhdFi.unfreezeAccount.call(addressMIrrccz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPArky5k6 = await TPA.new({from: accounts[3]});
		const uintC0Dfvtf = BigInt("839")
		const addressIZW1dX9 = accounts[2]
		const uintGRM38IB = BigInt("1122")
		const addressH0kw7qq = accounts[3]
//		const boolszSfSL = await TPArky5k6.transfer.call(addressIZW1dX9, uintC0Dfvtf, {from: accounts[4]});
//		const addresss4BEqYf = await TPArky5k6.burnFrom.call(addressH0kw7qq, uintGRM38IB, {from: accounts[1]});
//		await TPArky5k6.renounceAdmin.call({from: accounts[3]});
//		const uint8H2dgxG = await TPArky5k6.decimals.call({from: accounts[3]});
//		await TPArky5k6.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPArky5k6.transfer.call(addressIZW1dX9, uintC0Dfvtf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const uintRt6w7F = BigInt("1359")
		const addressnFbyDHN = accounts[4]
		const stringTps9ffL = await TPAnvfS6X9.symbol.call({from: accounts[2]});
		const boolDXnXjbV = await TPAnvfS6X9.approve.call(addressnFbyDHN, uintRt6w7F, {from: accounts[0]});
		const stringUOwaquV = await TPAnvfS6X9.name.call({from: accounts[2]});

		assert.equal(boolDXnXjbV, true)
		assert.equal(stringTps9ffL, "TPA")
		assert.equal(stringUOwaquV, "TPA")
	});

	it('test for TPA', async () => {
		const TPAjlFl7Sd = await TPA.new({from: accounts[3]});
		const uintIyMcdU2 = BigInt("1098")
		const addressZTaOxfV = accounts[0]
		const addressARAx95x = accounts[1]
		const uintMcdSrK8 = BigInt("1728")
		const uintyZpxnS1 = BigInt("1962")
		const addressMlacGW0 = accounts[2]
		const uintOh4PFrd = BigInt("1557")
		const uintxCWGSeU = BigInt("1577")
		const addressbY5aJNe = accounts[5]
		const uint8znZ4L6r = await TPAjlFl7Sd.decimals.call({from: accounts[0]});
//		await TPAjlFl7Sd.unpause.call({from: accounts[0]});
//		const boolu0y4kRo = await TPAjlFl7Sd.transferFrom.call(addressARAx95x, addressZTaOxfV, uintIyMcdU2, {from: accounts[1]});
//		await TPAjlFl7Sd.whenNotPaused.call({from: accounts[3]});
//		const boolEfgZXNR = await TPAjlFl7Sd.transferWithLock.call(addressMlacGW0, uintyZpxnS1, uintMcdSrK8, {from: accounts[5]});
//		const stringipiv4zR = await TPAjlFl7Sd.name.call({from: accounts[2]});
//		const boolyvBfL6m = await TPAjlFl7Sd.lock.call(addressbY5aJNe, uintxCWGSeU, uintOh4PFrd, {from: accounts[2]});
//		await TPAjlFl7Sd.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint8znZ4L6r, BigInt("18"))
		await expect(TPAjlFl7Sd.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const uintRIxHhYb = BigInt("1359")
		const addressYqBIrwa = accounts[4]
		const addresszwUfPee = accounts[4]
		const stringTps9ffL = await TPAnvfS6X9.symbol.call({from: accounts[2]});
		const boolDXnXjbV = await TPAnvfS6X9.approve.call(addressYqBIrwa, uintRIxHhYb, {from: accounts[0]});
		const stringUOwaquV = await TPAnvfS6X9.name.call({from: accounts[2]});
		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addresszwUfPee, {from: accounts[2]});

		assert.equal(boolDXnXjbV, true)
		assert.equal(stringTps9ffL, "TPA")
		assert.equal(stringUOwaquV, "TPA")
		assert.equal(uint256bX4WZNc, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPArky5k6 = await TPA.new({from: accounts[3]});
		const uintgNDWgy9 = BigInt("1121")
		const addressd4fO7rF = "0x0000000000000000000000000000000000000001"
		const addressIbELKWR = accounts[1]
		const uint1X9ZjA = BigInt("839")
		const addressOj6OMF6 = accounts[2]
		const uintnvRnIt = BigInt("1122")
		const addressiBnMuTb = accounts[3]
		const uintZm36IXE = BigInt("2034")
		const addressHx7yxXW = accounts[0]
		const addressDJ8WGQr = "0x0000000000000000000000000000000000000001"
//		const boolT7iJnfj = await TPArky5k6.transferFrom.call(addressIbELKWR, addressd4fO7rF, uintgNDWgy9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolszSfSL = await TPArky5k6.transfer.call(addressOj6OMF6, uint1X9ZjA, {from: accounts[4]});
//		const addresss4BEqYf = await TPArky5k6.burnFrom.call(addressiBnMuTb, uintnvRnIt, {from: accounts[1]});
//		const boolNEnhmW2 = await TPArky5k6.transferFrom.call(addressDJ8WGQr, addressHx7yxXW, uintZm36IXE, {from: accounts[3]});
//		await TPArky5k6.renounceAdmin.call({from: accounts[3]});
//		await TPArky5k6.pause.call({from: accounts[1]});
//		await TPArky5k6.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPArky5k6.transferFrom.call(addressIbELKWR, addressd4fO7rF, uintgNDWgy9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const addresseZQ9J4L = accounts[4]
		const addressaExSD2D = accounts[1]
		const addressoDCV9ni = accounts[4]
		const uint256PtajOHR = await TPAtKBiFSG.allowance.call(addressaExSD2D, addresseZQ9J4L, {from: accounts[0]});
		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJKSc5xL = await TPAtKBiFSG.name.call({from: accounts[4]});
//		await TPAtKBiFSG.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresshKHFtF7 = await TPAtKBiFSG.addAdmin.call(addressoDCV9ni, {from: accounts[5]});
//		const uint256RSdfibE = await TPAtKBiFSG.totalSupply.call({from: accounts[2]});

		assert.equal(boolOWj0ghf, false)
		assert.equal(stringJKSc5xL, "TPA")
		assert.equal(uint256PtajOHR, BigInt("0"))
		await expect(TPAtKBiFSG.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintvjwBQeb = BigInt("1225")
		const addressx5DOKSq = accounts[2]
		const uintb3qRY6E = BigInt("311")
		const addresswR2A4ho = accounts[3]
		const addressvNHZjI = accounts[0]
		const boolYSDoY3j = await TPAtKBiFSG.transfer.call(addressx5DOKSq, uintvjwBQeb, {from: accounts[2]});
//		const boolmsrqqb = await TPAtKBiFSG.transferFrom.call(addressvNHZjI, addresswR2A4ho, uintb3qRY6E, {from: accounts[3]});
//		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYSDoY3j, true)
		await expect(TPAtKBiFSG.transferFrom.call(addressvNHZjI, addresswR2A4ho, uintb3qRY6E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApuNfvUg = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcMdmyi = BigInt("1882")
		const addressuIp3LW8 = accounts[1]
		const addressmLZVeaZ = accounts[2]
		const boolnWDP7W = await TPApuNfvUg.decreaseAllowance.call(addressuIp3LW8, uintcMdmyi, {from: accounts[0]});
		await TPApuNfvUg.whenPaused.call({from: accounts[4]});
		const uint256W0iBPab = await TPApuNfvUg.balanceOf.call(addressmLZVeaZ, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const uintRbD2vgz = BigInt("651")
		const addressXfaEkr6 = "0x0000000000000000000000000000000000000001"
		const uintjP4G06G = BigInt("1359")
		const address9exwto = accounts[4]
		const addressZZ1X2Tx = accounts[3]
		const addressKEaqW9L = accounts[4]
		const boolqqNR9bm = await TPAnvfS6X9.increaseAllowance.call(addressXfaEkr6, uintRbD2vgz, {from: accounts[3]});
		const stringTps9ffL = await TPAnvfS6X9.symbol.call({from: accounts[2]});
		const boolDXnXjbV = await TPAnvfS6X9.approve.call(address9exwto, uintjP4G06G, {from: accounts[0]});
		const uint256k9nEAmV = await TPAnvfS6X9.balanceOf.call(addressZZ1X2Tx, {from: accounts[0]});
		const stringUOwaquV = await TPAnvfS6X9.name.call({from: accounts[2]});
		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressKEaqW9L, {from: accounts[2]});

		assert.equal(boolDXnXjbV, true)
		assert.equal(boolqqNR9bm, true)
		assert.equal(stringTps9ffL, "TPA")
		assert.equal(stringUOwaquV, "TPA")
		assert.equal(uint256bX4WZNc, BigInt("0"))
		assert.equal(uint256k9nEAmV, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const addressnGUmuX6 = accounts[4]
		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressecHbAUY = await TPAtKBiFSG.removeAdmin.call(addressnGUmuX6, {from: accounts[2]});

		assert.equal(boolOWj0ghf, false)
		await expect(TPAtKBiFSG.removeAdmin.call(addressnGUmuX6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintTMuXjCq = BigInt("852")
		const addressikWQLqq = "0x0000000000000000000000000000000000000001"
		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZXD9Hjd = await TPAtKBiFSG.burnFrom.call(addressikWQLqq, uintTMuXjCq, {from: accounts[5]});

		assert.equal(boolOWj0ghf, false)
		await expect(TPAtKBiFSG.burnFrom.call(addressikWQLqq, uintTMuXjCq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const uintCpMGzsu = BigInt("956")
		const addresszomPrAn = accounts[5]
		const addressef57JBO = accounts[5]
		const addressHlglxsV = accounts[4]
//		await TPAnvfS6X9.renounceAdmin.call({from: accounts[5]});
//		const boolPiN12LG = await TPAnvfS6X9.unlock.call(addresszomPrAn, uintCpMGzsu, {from: accounts[1]});
//		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressef57JBO, {from: accounts[2]});
//		const uint256RHsN5vZ = await TPAnvfS6X9.balanceOf.call(addressHlglxsV, {from: accounts[4]});

		await expect(TPAnvfS6X9.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintKIwUY8f = BigInt("1102")
		const addressS0PnNR2 = accounts[5]
		const uintrJtZKg1 = BigInt("1401")
		const addressBSCHmsM = accounts[2]
		const uintC5AN2he = BigInt("1225")
		const addressDKrD9LV = accounts[2]
		const uintFrv4zBc = BigInt("329")
		const addressuMrlWC = accounts[3]
		const addressLJxoj20 = accounts[0]
		const boolyVU08oG = await TPAtKBiFSG.increaseAllowance.call(addressS0PnNR2, uintKIwUY8f, {from: accounts[3]});
//		const boolyXX8WUd = await TPAtKBiFSG.decreaseAllowance.call(addressBSCHmsM, uintrJtZKg1, {from: accounts[1]});
//		const boolYSDoY3j = await TPAtKBiFSG.transfer.call(addressDKrD9LV, uintC5AN2he, {from: accounts[2]});
//		const boolmsrqqb = await TPAtKBiFSG.transferFrom.call(addressLJxoj20, addressuMrlWC, uintFrv4zBc, {from: accounts[3]});
//		const boolOWj0ghf = await TPAtKBiFSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		await TPAtKBiFSG.whenPaused.call({from: accounts[5]});

		assert.equal(boolyVU08oG, true)
		await expect(TPAtKBiFSG.decreaseAllowance.call(addressBSCHmsM, uintrJtZKg1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const uint4x52x1 = BigInt("1624")
		const addressXrygSoO = accounts[0]
		const uintSsSj282 = BigInt("858")
		const addresscu7Hrly = accounts[2]
		const addressVIDOyh0 = accounts[4]
//		await TPAnvfS6X9.pause.call({from: accounts[2]});
//		const booldASqfsB = await TPAnvfS6X9.transfer.call(addressXrygSoO, uint4x52x1, {from: accounts[2]});
//		const stringTps9ffL = await TPAnvfS6X9.symbol.call({from: accounts[2]});
//		const addressuxf9weo = await TPAnvfS6X9.burnFrom.call(addresscu7Hrly, uintSsSj282, {from: accounts[1]});
//		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressVIDOyh0, {from: accounts[2]});

		await expect(TPAnvfS6X9.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const addressStw8siK = accounts[6]
		const uintZFj62MJ = BigInt("1239")
		const uintomihhL2 = BigInt("688")
		const addressjSE3XB3 = accounts[2]
		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressStw8siK, {from: accounts[2]});
//		const uint256ATuemII = await TPAnvfS6X9.burn.call(uintZFj62MJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressRw3jr3c = await TPAnvfS6X9.burnFrom.call(addressjSE3XB3, uintomihhL2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256bX4WZNc, BigInt("0"))
		await expect(TPAnvfS6X9.burn.call(uintZFj62MJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintLEPdhLl = BigInt("1275")
		const uintt2C5uPE = BigInt("1916")
		const addressnLpnZ0j = accounts[5]
		const uintAbARdv8 = BigInt("1238")
		const addressePIsYT0 = accounts[2]
		const uintZRFuzdk = BigInt("311")
		const addressFLQM0Ca = accounts[3]
		const addressIQOe2bq = accounts[0]
		const boolKt4fpAZ = await TPAtKBiFSG.transferWithLock.call(addressnLpnZ0j, uintt2C5uPE, uintLEPdhLl, {from: accounts[2]});
		const boolYSDoY3j = await TPAtKBiFSG.transfer.call(addressePIsYT0, uintAbARdv8, {from: accounts[2]});
//		const boolmsrqqb = await TPAtKBiFSG.transferFrom.call(addressIQOe2bq, addressFLQM0Ca, uintZRFuzdk, {from: accounts[3]});

		assert.equal(boolKt4fpAZ, true)
		assert.equal(boolYSDoY3j, true)
		await expect(TPAtKBiFSG.transferFrom.call(addressIQOe2bq, addressFLQM0Ca, uintZRFuzdk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintwoFPw51 = BigInt("1225")
		const addressUPsKVQ5 = accounts[3]
		const addressY7ejVnz = accounts[4]
		const boolYSDoY3j = await TPAtKBiFSG.transfer.call(addressUPsKVQ5, uintwoFPw51, {from: accounts[2]});
		const boolTcsHwOH = await TPAtKBiFSG.freezeAccount.call(addressY7ejVnz, {from: accounts[2]});

		assert.equal(boolTcsHwOH, true)
		assert.equal(boolYSDoY3j, true)
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const addressEHkfKM = accounts[5]
		const addressjVBFhkd = accounts[4]
		const uintAlQwesU = BigInt("91")
		const uintNTwnaRT = BigInt("853")
		const addressUdJ88g = accounts[3]
		const addressierp1b = accounts[6]
		const uint256fHmZHyJ = await TPAtKBiFSG.allowance.call(addressjVBFhkd, addressEHkfKM, {from: accounts[2]});
//		const boolENVoAmz = await TPAtKBiFSG.lock.call(addressUdJ88g, uintNTwnaRT, uintAlQwesU, {from: accounts[2]});
//		const addressecHbAUY = await TPAtKBiFSG.removeAdmin.call(addressierp1b, {from: accounts[2]});

		assert.equal(uint256fHmZHyJ, BigInt("0"))
		await expect(TPAtKBiFSG.lock.call(addressUdJ88g, uintNTwnaRT, uintAlQwesU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const addressU0F8ND = accounts[1]
		const addressYKMygPM = accounts[5]
		const addressZTDeQ0s = await TPAnvfS6X9.transferOwnership.call(addressU0F8ND, {from: accounts[2]});
//		await TPAnvfS6X9.whenPaused.call({from: accounts[2]});
//		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressYKMygPM, {from: accounts[2]});

		await expect(TPAnvfS6X9.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtKBiFSG = await TPA.new({from: accounts[2]});
		const uintghohOM = BigInt("1191")
		const addresszcRkLId = accounts[2]
		const uintaiJIIvy = BigInt("604")
		const addressIHuhlLj = accounts[4]
		const addressCd6Qlvr = accounts[2]
		const uint3rMRlQ = BigInt("857")
		const addressSFlgNxi = accounts[3]
		const addressyKXNA7k = accounts[2]
		const addressmK0OlSR = accounts[3]
		const boolYSDoY3j = await TPAtKBiFSG.transfer.call(addresszcRkLId, uintghohOM, {from: accounts[2]});
		const boolo80hNgW = await TPAtKBiFSG.increaseAllowance.call(addressIHuhlLj, uintaiJIIvy, {from: accounts[3]});
//		await TPAtKBiFSG.renounceAdmin.call({from: accounts[2]});
//		const uint256QV0cISi = await TPAtKBiFSG.balanceOf.call(addressCd6Qlvr, {from: accounts[2]});
//		const boolR2XtjGM = await TPAtKBiFSG.approve.call(addressSFlgNxi, uint3rMRlQ, {from: accounts[2]});
//		const boolR9qOwVQ = await TPAtKBiFSG.isAdmin.call(addressyKXNA7k, {from: accounts[2]});
//		const addressR38yCVK = await TPAtKBiFSG.addAdmin.call(addressmK0OlSR, {from: accounts[1]});

		assert.equal(boolYSDoY3j, true)
		assert.equal(boolo80hNgW, true)
		await expect(TPAtKBiFSG.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnvfS6X9 = await TPA.new({from: accounts[2]});
		const addressgue2sNm = accounts[6]
		const addressjcbq1Af = accounts[2]
		const uint256bX4WZNc = await TPAnvfS6X9.balanceOf.call(addressgue2sNm, {from: accounts[2]});
		const boolyZWrOys = await TPAnvfS6X9.isOwner.call(addressjcbq1Af, {from: accounts[4]});

		assert.equal(boolyZWrOys, true)
		assert.equal(uint256bX4WZNc, BigInt("0"))
	});
})