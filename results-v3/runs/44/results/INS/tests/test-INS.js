const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintXV69mPz = BigInt("728")
		const stringCNO0rzz = "wfbVN7IWl3OpPOEBzagYUgQDjUtWrURXImm3n5Gar41SgqLg52fijvj1B5Lrjpgmi5vN2ulKC"
		const stringiRmdhp = "gOf6qzRIk4j2geD"
		const INSGSYfTRn = await INS.new(uintXV69mPz, stringCNO0rzz, stringiRmdhp, {from: accounts[3]});
		const byteiJM1OFR = "0x041719100f1f111b0b04100a0e1e0905021f031a0c161f0117"
		const uintQVpGVui = BigInt("411")
		const addressHrRAjIp = accounts[3]
		const uintTS2y6HL = BigInt("658")
		const addressCAg4qjB = accounts[0]
		const addressX9zQ2UH = accounts[0]
		const boolXKMMsZt = await INSGSYfTRn.approveAndCall.call(addressHrRAjIp, uintQVpGVui, byteiJM1OFR, {from: accounts[1]});
		const boolnxXK8pB = await INSGSYfTRn.transferFrom.call(addressX9zQ2UH, addressCAg4qjB, uintTS2y6HL, {from: accounts[1]});

		await expect(INSGSYfTRn.approveAndCall.call(addressHrRAjIp, uintQVpGVui, byteiJM1OFR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintFC5o6jl = BigInt("362")
		const stringIrW6QW = "MSfwvzz"
		const stringWTk0bv8 = "l8aGjvCxYUIBSDtKr1blJvcSAjmoQII"
		const INSm8QOSLX = await INS.new(uintFC5o6jl, stringIrW6QW, stringWTk0bv8, {from: accounts[1]});
		const uintPNORFbQ = BigInt("1024")
		const uintN1eMSty = BigInt("1596")
		const byteNcnkgO = "0x131a1c06141b1a1114"
		const uintHMhYDme = BigInt("704")
		const addressOs3fKa = accounts[4]
		const boolqOdUdhg = await INSm8QOSLX.burn.call(uintPNORFbQ, {from: accounts[1]});
		const boolotD4dq3 = await INSm8QOSLX.burn.call(uintN1eMSty, {from: accounts[4]});
		const boolJ16wizg = await INSm8QOSLX.approveAndCall.call(addressOs3fKa, uintHMhYDme, byteNcnkgO, {from: accounts[4]});

		assert.equal(boolqOdUdhg, true)
		await expect(INSm8QOSLX.burn.call(uintN1eMSty, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintVlkHwI5 = BigInt("1001")
		const stringVS9na2V = "5X84k3tgRwLD"
		const stringwluSHQW = "ctsH5KPDFl0agFxVu2YRShQ4PunbpqDpZE7QklEK4SsjuTPAszwJ5qhU3W3Hk7KFvf0QWzGda"
		const INSUvP6PHz = await INS.new(uintVlkHwI5, stringVS9na2V, stringwluSHQW, {from: accounts[4]});
		const uintInIGR93 = BigInt("938")
		const addressl55PXMW = accounts[2]
		const bytemVEATl = "0x16091b181707020a10160112191f191d010d020d05131f14091410"
		const uintEfitfVF = BigInt("1828")
		const addressmu6Xj5x = accounts[2]
		const byteHOR4CY8 = "0x0a0918181a160d0a0d04140f0d1c1a0c101e0d1d091f1304"
		const uinthAJ7buM = BigInt("972")
		const addressovF4pV5 = accounts[0]
		const boolbd6s9CZ = await INSUvP6PHz.transfer.call(addressl55PXMW, uintInIGR93, {from: accounts[2]});
		const boolbbLfoKe = await INSUvP6PHz.approveAndCall.call(addressmu6Xj5x, uintEfitfVF, bytemVEATl, {from: accounts[1]});
		const boolHTagGUr = await INSUvP6PHz.approveAndCall.call(addressovF4pV5, uinthAJ7buM, byteHOR4CY8, {from: accounts[2]});

		await expect(INSUvP6PHz.transfer.call(addressl55PXMW, uintInIGR93, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintumfuli5 = BigInt("458")
		const stringZK3Tiav = "5RlkQhrP7mAz"
		const stringb3EeJor = "21rCAb8Kq4U"
		const INSUfK0cK = await INS.new(uintumfuli5, stringZK3Tiav, stringb3EeJor, {from: accounts[0]});
		const uintfy9vPjH = BigInt("1351")
		const addresssyTydno = accounts[4]
		const address7jAxnV = accounts[3]
		const uintQKSWS9z = BigInt("618")
		const addressHsbr6iU = accounts[1]
		const bytetbNRknb = "0x1717021d06091a08140d080b0c190e0b1f03"
		const uintomcgTOt = BigInt("745")
		const addressSbYupJV = accounts[4]
		const boole5vb6B = await INSUfK0cK.transferFrom.call(address7jAxnV, addresssyTydno, uintfy9vPjH, {from: accounts[2]});
		const boolBUVTlcv = await INSUfK0cK.approve.call(addressHsbr6iU, uintQKSWS9z, {from: accounts[5]});
		const boolqLN9bKJ = await INSUfK0cK.approveAndCall.call(addressSbYupJV, uintomcgTOt, bytetbNRknb, {from: accounts[0]});

		await expect(INSUfK0cK.transferFrom.call(address7jAxnV, addresssyTydno, uintfy9vPjH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintC6KWMHI = BigInt("1079")
		const stringy6dPk4F = "5yYfHotYmiiaKk9HFOFUOYbsKaQSXts9aYyW7OS73scnXisJQ8sX"
		const stringrQsm9Qm = "97sCu2nhaiC"
		const INShOPN6d9 = await INS.new(uintC6KWMHI, stringy6dPk4F, stringrQsm9Qm, {from: accounts[2]});
		const uintMO1UCGy = BigInt("1971")
		const addressMP1bSrI = accounts[4]
		const uintuSUhdI = BigInt("1508")
		const addresspY6jqRH = "0x0000000000000000000000000000000000000001"
		const booljqjVky = await INShOPN6d9.transfer.call(addressMP1bSrI, uintMO1UCGy, {from: accounts[2]});
		const boolCDORakD = await INShOPN6d9.burnFrom.call(addresspY6jqRH, uintuSUhdI, {from: accounts[5]});

		assert.equal(booljqjVky, true)
		await expect(INShOPN6d9.burnFrom.call(addresspY6jqRH, uintuSUhdI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcTvgTbp = BigInt("458")
		const stringZK3Tiav = "5RlkQhrP7mAz"
		const stringb3EeJor = "21rCAb8Kq4U"
		const INSUfK0cK = await INS.new(uintcTvgTbp, stringZK3Tiav, stringb3EeJor, {from: accounts[0]});
		const uintjaqtkNX = BigInt("1411")
		const addressJrAvHtT = accounts[0]
		const uint8SqvdI = BigInt("1351")
		const addressiVmo9zk = accounts[4]
		const addressK0Q0LRv = accounts[4]
		const uintBB8vMSD = BigInt("457")
		const addressF1hujzC = accounts[0]
		const address3zpafZ = accounts[4]
		const boolbct7RKG = await INSUfK0cK.burnFrom.call(addressJrAvHtT, uintjaqtkNX, {from: accounts[1]});
		const boole5vb6B = await INSUfK0cK.transferFrom.call(addressK0Q0LRv, addressiVmo9zk, uint8SqvdI, {from: accounts[2]});
		const boolDj73b5q = await INSUfK0cK.transferFrom.call(address3zpafZ, addressF1hujzC, uintBB8vMSD, {from: accounts[4]});

		await expect(INSUfK0cK.burnFrom.call(addressJrAvHtT, uintjaqtkNX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintPg5LqeB = BigInt("346")
		const stringGhARyrt = "qxFvGLXQu7xweKDVnmwW8xIwWn4qNJ7EeqGimEcwx9tTCh6fuJdnzEXWsKooDB9lV1JU25bmuYiE3asdXQVPxIvtU8cAk"
		const stringmadr4M9 = "tu6Qz6lLJeamdNRxHOy5znLd"
		const INSDHF3Ufk = await INS.new(uintPg5LqeB, stringGhARyrt, stringmadr4M9, {from: "0x0000000000000000000000000000000000000001"});
		const uintkHTrp3m = BigInt("1854")
		const uintABZuzHj = BigInt("1858")
		const addresscUF5B7i = "0x0000000000000000000000000000000000000001"
		const uintWcmj3D8 = BigInt("1729")
		const addressz1H3Yo = accounts[1]
		const addressZwaKth = accounts[5]
		const boolMSUAsGo = await INSDHF3Ufk.burn.call(uintkHTrp3m, {from: accounts[4]});
		const boolttPomPZ = await INSDHF3Ufk.approve.call(addresscUF5B7i, uintABZuzHj, {from: accounts[4]});
		const boolpCwGSu = await INSDHF3Ufk.transferFrom.call(addressZwaKth, addressz1H3Yo, uintWcmj3D8, {from: accounts[0]});
	});
})