const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringZRwIwiD = "wt8Ito7bc4eJObPRjNDRJXbqqF1sJbzlnlxDG1h65LFd2vv3dX8fUNPIQ"
		const stringHHjiORG = "ylXVMSr4s46CjcKqHD52SQTpizLEg91IcphaarTgHt4kB2Deawk4mA3aXvfkt0kiHE6vRyrL"
		const uintLohMLG6 = BigInt("244")
		const AntiBaseProtocolUTneAAX = await AntiBaseProtocol.new(stringZRwIwiD, stringHHjiORG, uintLohMLG6, {from: accounts[0]});
		const uintKMdV5vP = BigInt("1900")
		const addressqTVBCq5 = accounts[5]
		const addressMCUwEAq = accounts[2]
		const addressSZDtuj = accounts[1]
		const addresswd6v8s = await AntiBaseProtocolUTneAAX._mint.call(addressqTVBCq5, uintKMdV5vP, {from: accounts[1]});
		const addressaFjL7n8 = await AntiBaseProtocolUTneAAX.transferOwnership.call(addressMCUwEAq, {from: accounts[3]});
		const addressssO8dZW = await AntiBaseProtocolUTneAAX._transferOwnership.call(addressSZDtuj, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuO21LXH = BigInt("274")
		const uintBQrzDkR = BigInt("922")
		const addresse2ixAsy = accounts[4]
		const addressSjtr84O = accounts[5]
		const addressp0Rang7 = accounts[2]
		const addressicZcHzT = accounts[5]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintuO21LXH, {from: accounts[2]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressSjtr84O, addresse2ixAsy, uintBQrzDkR, {from: accounts[1]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressicZcHzT, addressp0Rang7, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressSjtr84O, addresse2ixAsy, uintBQrzDkR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANsmD3J = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmAzHsar = BigInt("1306")
		const addressGHtNd6M = accounts[2]
		const uintpCvIdi4 = BigInt("693")
		const uintyB6VSVp = BigInt("209")
		const addressLgo84l0 = accounts[4]
		const address69gTNO = accounts[1]
		const addressi3DBRxQ = accounts[1]
		const addressBIgP3wC = accounts[3]
		const uintSzDFId7 = BigInt("1525")
		const boolnNY11M = await AntiBaseProtocolANsmD3J.decreaseAllowance.call(addressGHtNd6M, uintmAzHsar, {from: accounts[1]});
		const uint256FftQzY7 = await AntiBaseProtocolANsmD3J.burn.call(uintpCvIdi4, {from: accounts[0]});
		const boolCeHa4Wt = await AntiBaseProtocolANsmD3J.transferFrom.call(address69gTNO, addressLgo84l0, uintyB6VSVp, {from: accounts[2]});
		const uint256RiGrIXg = await AntiBaseProtocolANsmD3J.allowance.call(addressBIgP3wC, addressi3DBRxQ, {from: accounts[0]});
		const uint256NWcwdpr = await AntiBaseProtocolANsmD3J.findBurnFee.call(uintSzDFId7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxXmlo1E = await AntiBaseProtocol.new({from: accounts[0]});
		const addressvYzHERr = accounts[0]
//		await AntiBaseProtocolxXmlo1E.renounceOwnership.call({from: accounts[2]});
//		const uint8nvcuzcP = await AntiBaseProtocolxXmlo1E.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSey3m3m = await AntiBaseProtocolxXmlo1E._transferOwnership.call(addressvYzHERr, {from: accounts[5]});
//		const stringm5ZSKkQ = await AntiBaseProtocolxXmlo1E.name.call({from: accounts[5]});
//		await AntiBaseProtocolxXmlo1E.onlyOwner.call({from: accounts[3]});
//		const uint8Z5MJE8j = await AntiBaseProtocolxXmlo1E.decimals.call({from: accounts[2]});

		await expect(AntiBaseProtocolxXmlo1E.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBLadJOA = await AntiBaseProtocol.new({from: accounts[3]});
		const uintOAhAW5h = BigInt("256")
		const addressGv7wtSW = accounts[4]
		const uintmplXxeR = BigInt("1884")
		const addressRVC83Jh = accounts[0]
//		const addresskEOQWo = await AntiBaseProtocolBLadJOA._burnFrom.call(addressGv7wtSW, uintOAhAW5h, {from: accounts[3]});
//		await AntiBaseProtocolBLadJOA.renounceOwnership.call({from: accounts[2]});
//		const uint256E1Uv5Z = await AntiBaseProtocolBLadJOA.burn.call(uintmplXxeR, {from: accounts[0]});
//		const addressNXE8kyh = await AntiBaseProtocolBLadJOA._transferOwnership.call(addressRVC83Jh, {from: accounts[0]});

		await expect(AntiBaseProtocolBLadJOA._burnFrom.call(addressGv7wtSW, uintOAhAW5h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintgSmaHyb = BigInt("274")
		const uintXZWVei0 = BigInt("1184")
		const uintRDLuY0y = BigInt("922")
		const addressC9zeAHP = accounts[5]
		const addressyPRjyOL = accounts[5]
		const uintz9jXHfZ = BigInt("1778")
		const addressfK2ZXeP = "0x0000000000000000000000000000000000000001"
		const addressrFZN7MV = accounts[2]
		const addressHh2rW8u = accounts[5]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintgSmaHyb, {from: accounts[2]});
		const uint256S571QT = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintXZWVei0, {from: accounts[1]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressyPRjyOL, addressC9zeAHP, uintRDLuY0y, {from: accounts[1]});
//		const boolYqofX3 = await AntiBaseProtocolM4n1OLQ.transfer.call(addressfK2ZXeP, uintz9jXHfZ, {from: accounts[0]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressHh2rW8u, addressrFZN7MV, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256S571QT, BigInt("180"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressyPRjyOL, addressC9zeAHP, uintRDLuY0y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uinta5HdbV9 = BigInt("274")
		const uintH7mrfi5 = BigInt("158")
		const addressMpxnMSX = accounts[4]
		const uintR66gN0B = BigInt("1391")
		const addresssG2wjuZ = accounts[4]
		const addressnShjbGr = accounts[5]
		const addresssWLWeLe = accounts[2]
		const addressyheybCs = accounts[5]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uinta5HdbV9, {from: accounts[2]});
		const boolOlmjhC = await AntiBaseProtocolM4n1OLQ.increaseAllowance.call(addressMpxnMSX, uintH7mrfi5, {from: accounts[0]});
//		const boolvioWo9z = await AntiBaseProtocolM4n1OLQ.transferFrom.call(addressnShjbGr, addresssG2wjuZ, uintR66gN0B, {from: accounts[1]});
//		await AntiBaseProtocolM4n1OLQ.requestGas.call({from: accounts[2]});
//		const uint256ssupm1 = await AntiBaseProtocolM4n1OLQ.allowance.call(addressyheybCs, addresssWLWeLe, {from: accounts[5]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boolOlmjhC, true)
		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.transferFrom.call(addressnShjbGr, addresssG2wjuZ, uintR66gN0B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolffaXkUK = await AntiBaseProtocol.new({from: accounts[3]});
		const addressK2xECI = accounts[3]
		const addresspLP388a = "0x0000000000000000000000000000000000000001"
		const uintwbi8bEx = BigInt("1502")
		const addressKA6x5Xp = "0x0000000000000000000000000000000000000001"
		const addressvWj7tLN = accounts[1]
		const uint5wF7Dw = BigInt("356")
		const addressaoOK7gv = accounts[0]
		const uint256jTAHRaX = await AntiBaseProtocolffaXkUK.allowance.call(addresspLP388a, addressK2xECI, {from: accounts[0]});
		const boolXzcnE4t = await AntiBaseProtocolffaXkUK.increaseAllowance.call(addressKA6x5Xp, uintwbi8bEx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256X9T6hk = await AntiBaseProtocolffaXkUK.balanceOf.call(addressvWj7tLN, {from: accounts[0]});
//		const addressROfIZTf = await AntiBaseProtocolffaXkUK.burnFrom.call(addressaoOK7gv, uint5wF7Dw, {from: accounts[4]});
//		const addressnfmIaQY = await AntiBaseProtocolffaXkUK.owner.call({from: accounts[4]});

		assert.equal(boolXzcnE4t, true)
		assert.equal(uint256X9T6hk, BigInt("0"))
		assert.equal(uint256jTAHRaX, BigInt("0"))
		await expect(AntiBaseProtocolffaXkUK.burnFrom.call(addressaoOK7gv, uint5wF7Dw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintUlmx5SB = BigInt("274")
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintUlmx5SB, {from: accounts[2]});
		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint88xm6CB, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol8TX31n = await AntiBaseProtocol.new({from: accounts[1]});
		const uintF1XSUfl = BigInt("1118")
		const addressIpsy9yb = accounts[1]
		const uintaNkxowz = BigInt("1722")
		const uinta8pBgH3 = BigInt("1771")
		const addressUad0yyr = accounts[2]
		const uintNwHvw5Y = BigInt("600")
		const addressmHW8GcZ = accounts[3]
		const boolLUsAJss = await AntiBaseProtocol8TX31n.increaseAllowance.call(addressIpsy9yb, uintF1XSUfl, {from: accounts[5]});
		const addressC9TfLz0 = await AntiBaseProtocol8TX31n.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mU4qO3R = await AntiBaseProtocol8TX31n.findRewardFee.call(uintaNkxowz, {from: accounts[4]});
		const stringg9SVXDW = await AntiBaseProtocol8TX31n.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolRlUJ5TV = await AntiBaseProtocol8TX31n.transfer.call(addressUad0yyr, uinta8pBgH3, {from: accounts[4]});
//		const boolKmfKtZ = await AntiBaseProtocol8TX31n.approve.call(addressmHW8GcZ, uintNwHvw5Y, {from: accounts[4]});

		assert.equal(addressC9TfLz0, 0xEDC4c2b6e140Fd35F75ebcC8283183376E88727e)
		assert.equal(boolLUsAJss, true)
		assert.equal(stringg9SVXDW, "ABASE")
		assert.equal(uint256mU4qO3R, BigInt("90"))
		await expect(AntiBaseProtocol8TX31n.transfer.call(addressUad0yyr, uinta8pBgH3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintqU16l3H = BigInt("1029")
		const uintfJOxXuE = BigInt("1917")
		const addressmO8Ni7f = accounts[2]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintqU16l3H, {from: accounts[2]});
		const boolcEqdwQ7 = await AntiBaseProtocolM4n1OLQ.approve.call(addressmO8Ni7f, uintfJOxXuE, {from: accounts[2]});
		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(boolcEqdwQ7, true)
		assert.equal(uint256BO0kwMR, BigInt("55"))
		assert.equal(uint88xm6CB, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintXTxAZHW = BigInt("274")
		const uintkk1tFy6 = BigInt("1872")
		const addressPJX5Eel = accounts[0]
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintXTxAZHW, {from: accounts[2]});
//		const boolPFtLaSN = await AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(addressPJX5Eel, uintkk1tFy6, {from: accounts[0]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		await expect(AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(addressPJX5Eel, uintkk1tFy6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol8TX31n = await AntiBaseProtocol.new({from: accounts[1]});
		const uintFKdqYAu = BigInt("1118")
		const addressyGSv6P = accounts[1]
		const uint6Qj0IB = BigInt("1722")
		const uintsywa6Bs = BigInt("1274")
		const uintfKW2iCT = BigInt("1771")
		const addressqdRz8Tf = accounts[2]
		const uintfB1nlxW = BigInt("600")
		const addressda9Czq = accounts[3]
		const boolLUsAJss = await AntiBaseProtocol8TX31n.increaseAllowance.call(addressyGSv6P, uintFKdqYAu, {from: accounts[5]});
		const addressC9TfLz0 = await AntiBaseProtocol8TX31n.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mU4qO3R = await AntiBaseProtocol8TX31n.findRewardFee.call(uint6Qj0IB, {from: accounts[4]});
		const uint256LCXQT2l = await AntiBaseProtocol8TX31n.burn.call(uintsywa6Bs, {from: accounts[1]});
		const stringg9SVXDW = await AntiBaseProtocol8TX31n.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolRlUJ5TV = await AntiBaseProtocol8TX31n.transfer.call(addressqdRz8Tf, uintfKW2iCT, {from: accounts[4]});
//		const boolKmfKtZ = await AntiBaseProtocol8TX31n.approve.call(addressda9Czq, uintfB1nlxW, {from: accounts[4]});

		assert.equal(addressC9TfLz0, 0xEDC4c2b6e140Fd35F75ebcC8283183376E88727e)
		assert.equal(boolLUsAJss, true)
		assert.equal(stringg9SVXDW, "ABASE")
		assert.equal(uint256mU4qO3R, BigInt("90"))
		await expect(AntiBaseProtocol8TX31n.transfer.call(addressqdRz8Tf, uintfKW2iCT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintTRZLf1z = BigInt("1003")
		const addressqnu6Ve2 = accounts[3]
		const uintxEvGBen = BigInt("1136")
		const addressUj1hv6 = accounts[2]
		const uintwwdIT4v = BigInt("1153")
		const addressPKcgKji = accounts[3]
		const uintPmFwL91 = BigInt("1270")
		const uintvSDHNUG = BigInt("260")
		const stringn9uwFyC = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[0]});
//		const boolua6etmc = await AntiBaseProtocolM4n1OLQ.transfer.call(addressqnu6Ve2, uintTRZLf1z, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbka8eZk = await AntiBaseProtocolM4n1OLQ._burn.call(addressUj1hv6, uintxEvGBen, {from: accounts[1]});
//		const addressspAEWjN = await AntiBaseProtocolM4n1OLQ.burnFrom.call(addressPKcgKji, uintwwdIT4v, {from: accounts[3]});
//		const uint256Q3YSSi = await AntiBaseProtocolM4n1OLQ.findBurnFee.call(uintPmFwL91, {from: accounts[0]});
//		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintvSDHNUG, {from: accounts[2]});
//		const uint88xm6CB = await AntiBaseProtocolM4n1OLQ.decimals.call({from: accounts[4]});

		assert.equal(stringn9uwFyC, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolM4n1OLQ.transfer.call(addressqnu6Ve2, uintTRZLf1z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintVUKo8OI = BigInt("274")
		const uintV6rczSF = BigInt("342")
		const address9MdrHG = accounts[3]
		const stringHai6lJA = await AntiBaseProtocolM4n1OLQ.name.call({from: accounts[3]});
		const uint256eTmrT76 = await AntiBaseProtocolM4n1OLQ.totalSupply.call({from: accounts[4]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintVUKo8OI, {from: accounts[2]});
//		const boolEvJOcNe = await AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(address9MdrHG, uintV6rczSF, {from: accounts[2]});

		assert.equal(stringHai6lJA, "https://t.me/antibaseprotocol")
		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256eTmrT76, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolM4n1OLQ.decreaseAllowance.call(address9MdrHG, uintV6rczSF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolUc94JjM = await AntiBaseProtocol.new({from: accounts[4]});
		const uintqg3W5sc = BigInt("1845")
		const addressCtwvdt2 = accounts[0]
		const uint256HNi1SHC = await AntiBaseProtocolUc94JjM.totalSupply.call({from: accounts[0]});
//		await AntiBaseProtocolUc94JjM.renounceOwnership.call({from: accounts[4]});
//		const bool398HfL = await AntiBaseProtocolUc94JjM.decreaseAllowance.call(addressCtwvdt2, uintqg3W5sc, {from: accounts[1]});
//		await AntiBaseProtocolUc94JjM.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256HNi1SHC, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolUc94JjM.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintvqkSVWF = BigInt("805")
		const addressCXlFxI9 = accounts[4]
		const uintHcyUTLK = BigInt("280")
		const uint256OBfgH77 = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintvqkSVWF, {from: accounts[0]});
		const addressfiWCTnv = await AntiBaseProtocolM4n1OLQ.transferOwnership.call(addressCXlFxI9, {from: accounts[2]});
		const uint256BO0kwMR = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintHcyUTLK, {from: accounts[2]});

		assert.equal(uint256BO0kwMR, BigInt("15"))
		assert.equal(uint256OBfgH77, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolM4n1OLQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintsMRqioo = BigInt("0")
		const uint256uDRDvbJ = await AntiBaseProtocolM4n1OLQ.findRewardFee.call(uintsMRqioo, {from: accounts[1]});

		assert.equal(uint256uDRDvbJ, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uintHqtH4QZ = BigInt("27")
		const addressM7zFNOV = "0x00000000000000000000000000000000000000-1"
		const addressXJ7Io5n = accounts[2]
		const addressKEkYMJc = "0x0000000000000000000000000000000000000001"
//		const boolx0rEKXd = await AntiBaseProtocolsUocWLL.transfer.call(addressM7zFNOV, uintHqtH4QZ, {from: accounts[3]});
//		const uint256Lh7qNGm = await AntiBaseProtocolsUocWLL.balanceOf.call(addressXJ7Io5n, {from: accounts[2]});
//		const addressqGkYbq = await AntiBaseProtocolsUocWLL.transferOwnership.call(addressKEkYMJc, {from: accounts[1]});

		await expect(AntiBaseProtocolsUocWLL.transfer.call(addressM7zFNOV, uintHqtH4QZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uintP1EWYEr = BigInt("0")
		const addressrrESxYx = "0x0000000000000000000000000000000000000000"
//		const boolx0rEKXd = await AntiBaseProtocolsUocWLL.transfer.call(addressrrESxYx, uintP1EWYEr, {from: accounts[3]});

		await expect(AntiBaseProtocolsUocWLL.transfer.call(addressrrESxYx, uintP1EWYEr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uintr2vJ0mo = BigInt("1781")
		const addressOKMApla = accounts[0]
		const addressVZb6vkq = accounts[2]
//		const boolinssugo = await AntiBaseProtocolsUocWLL.transferFrom.call(addressVZb6vkq, addressOKMApla, uintr2vJ0mo, {from: accounts[1]});

		await expect(AntiBaseProtocolsUocWLL.transferFrom.call(addressVZb6vkq, addressOKMApla, uintr2vJ0mo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWbmswlp = BigInt("705")
		const addressNdYiYLo = accounts[2]
		const addressV2W3TXO = "0x0000000000000000000000000000000000000001"
		const uintCPSV2Ee = BigInt("0")
		const addressFeI8ITk = "0x0000000000000000000000000000000000000000"
//		const addressIPgBQzW = await AntiBaseProtocolsUocWLL.burnFrom.call(addressNdYiYLo, uintWbmswlp, {from: accounts[1]});
//		const addressTYqrzLQ = await AntiBaseProtocolsUocWLL._transferOwnership.call(addressV2W3TXO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolx0rEKXd = await AntiBaseProtocolsUocWLL.transfer.call(addressFeI8ITk, uintCPSV2Ee, {from: accounts[3]});

		await expect(AntiBaseProtocolsUocWLL.burnFrom.call(addressNdYiYLo, uintWbmswlp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uintyOIYGw = BigInt("1930")
		const addressCYy3LQg = accounts[4]
		const uintf5xK6vL = BigInt("0")
		const addressgwKEiB = "0x0000000000000000000000000000000000000001"
		const boolUhgarcs = await AntiBaseProtocolsUocWLL.transfer.call(addressCYy3LQg, uintyOIYGw, {from: accounts[2]});
		const boolx0rEKXd = await AntiBaseProtocolsUocWLL.transfer.call(addressgwKEiB, uintf5xK6vL, {from: accounts[3]});

		assert.equal(boolUhgarcs, true)
		assert.equal(boolx0rEKXd, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsUocWLL = await AntiBaseProtocol.new({from: accounts[2]});
		const uinttJJE2gS = BigInt("0")
		const addressG1xWqP3 = "0x00000000000000000000000000000000000000-2"
		const uintHq1GCt = BigInt("935")
//		const boolx0rEKXd = await AntiBaseProtocolsUocWLL.transfer.call(addressG1xWqP3, uinttJJE2gS, {from: accounts[3]});
//		const uint256ILpM6H1 = await AntiBaseProtocolsUocWLL.burn.call(uintHq1GCt, {from: accounts[4]});

		await expect(AntiBaseProtocolsUocWLL.transfer.call(addressG1xWqP3, uinttJJE2gS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})