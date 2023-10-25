const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALxUF3dr8 = await NAL.new({from: accounts[4]});
		const addresso6SEt7m = accounts[1]
		const uintCgfrTRh = BigInt("660")
		const addresstSybFLQ = accounts[2]
		const addressA0oX61V = accounts[2]
		const stringgEOV8Q = await NALxUF3dr8.name.call({from: accounts[0]});
		const addressKKlhPJ = await NALxUF3dr8.notFrozen.call(addresso6SEt7m, {from: accounts[5]});
		const boolHGG0HvS = await NALxUF3dr8.transfer.call(addresstSybFLQ, uintCgfrTRh, {from: accounts[4]});
		const boolGXkBZjV = await NALxUF3dr8.freezeAccount.call(addressA0oX61V, {from: accounts[0]});

		assert.equal(stringgEOV8Q, "Personal Token")
		await expect(NALxUF3dr8.notFrozen.call(addresso6SEt7m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const string7ENcy9 = "uXHi47aCi3Yv3FNI3yixvnOzFIby8AHUt67UtoRJjNR2jW8F5h8wPO2E02"
		const stringhWsdtdv = "lP9U4IW6rkeorAVlktWHlWaX7Ezo6lIuCw6ZFFO6YETFw8b3K7dbL9AWmJs0FLctjTuDt2W415r28zXYmCFGzvQHKwOCdhGk"
		const uintTTfG0x7 = BigInt("206")
		const NALnPFMBg = await NAL.new(string7ENcy9, stringhWsdtdv, uintTTfG0x7, {from: accounts[2]});
		const uintjqmGkuA = BigInt("645")
		const addressaSbuCAT = accounts[0]
		const addressnc3uhGm = accounts[0]
		const addressHKSj6O9 = accounts[2]
		const addresslQoeaET = accounts[2]
		const addresss0S7jQM = await NALnPFMBg.burnFrom.call(addressaSbuCAT, uintjqmGkuA, {from: accounts[2]});
		const addressBKBJSt7 = await NALnPFMBg.transferOwnership.call(addressnc3uhGm, {from: accounts[0]});
		const addresszkGw3D2 = await NALnPFMBg.transferOwnership.call(addressHKSj6O9, {from: accounts[2]});
		await NALnPFMBg.whenPaused.call({from: accounts[3]});
		const boolD0JDfj = await NALnPFMBg.isOwner.call(addresslQoeaET, {from: accounts[0]});
		await NALnPFMBg.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintdfgreT = BigInt("1802")
		const addressD2LNpAP = accounts[5]
		const addressDvIG0FA = accounts[0]
		const uintnv8kuex = BigInt("76")
		const addressSQDbvEO = accounts[0]
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressD2LNpAP, uintdfgreT, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		const addressh4ZDDT8 = await NALV9P1T0Z.notFrozen.call(addressDvIG0FA, {from: accounts[4]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressSQDbvEO, uintnv8kuex, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		await expect(NALV9P1T0Z.burnFrom.call(addressD2LNpAP, uintdfgreT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintZzm8AhJ = BigInt("1602")
		const addressmmPUxc = accounts[5]
		const uintPB4egN = BigInt("175")
		const addresso6gzgdC = accounts[0]
		const uintY0F5RSB = BigInt("1585")
		const addressrMaiqYO = accounts[3]
		const boolFsCGWm3 = await NAL6RjIcc.paused.call({from: accounts[4]});
		const boolS9oMsjK = await NAL6RjIcc.approve.call(addressmmPUxc, uintZzm8AhJ, {from: accounts[1]});
		const boolSipO2p9 = await NAL6RjIcc.increaseAllowance.call(addresso6gzgdC, uintPB4egN, {from: "0x0000000000000000000000000000000000000001"});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressrMaiqYO, uintY0F5RSB, {from: accounts[4]});

		assert.equal(boolFsCGWm3, false)
		assert.equal(boolS9oMsjK, true)
		assert.equal(boolSipO2p9, true)
		await expect(NAL6RjIcc.transfer.call(addressrMaiqYO, uintY0F5RSB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintuPpeEi = BigInt("1802")
		const addressXTppsDg = accounts[5]
		const addressC6Y4nkC = accounts[0]
		const uintX4RndtS = BigInt("76")
		const addressoD8bTKC = accounts[0]
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		await NALV9P1T0Z.unpause.call({from: accounts[5]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressXTppsDg, uintuPpeEi, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		const addressh4ZDDT8 = await NALV9P1T0Z.notFrozen.call(addressC6Y4nkC, {from: accounts[4]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressoD8bTKC, uintX4RndtS, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		await expect(NALV9P1T0Z.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintFtONEF = BigInt("34")
		const addressnFxQyYv = accounts[0]
		const addressCB3DWzh = accounts[1]
		const uintnYs3g64 = BigInt("1427")
		const addresstDuzaQm = accounts[1]
		const addressUIFEe8x = accounts[0]
		const uintb6oXY1 = BigInt("1802")
		const addressK6qxYnY = accounts[5]
		const uintL4WmHVI = BigInt("76")
		const addressr0jF9bo = accounts[0]
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const boolHSKkYnE = await NALV9P1T0Z.transferFrom.call(addressCB3DWzh, addressnFxQyYv, uintFtONEF, {from: accounts[3]});
		const boolIU8Hvg = await NALV9P1T0Z.decreaseAllowance.call(addresstDuzaQm, uintnYs3g64, {from: accounts[5]});
		const boolYcnkCvH = await NALV9P1T0Z.unfreezeAccount.call(addressUIFEe8x, {from: accounts[3]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressK6qxYnY, uintb6oXY1, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		await NALV9P1T0Z.renounceAdmin.call({from: accounts[1]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressr0jF9bo, uintL4WmHVI, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		await expect(NALV9P1T0Z.transferFrom.call(addressCB3DWzh, addressnFxQyYv, uintFtONEF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintlGZ560l = BigInt("1802")
		const addressT34Up1 = accounts[5]
		const uintPOJN4uZ = BigInt("76")
		const addressB4Tjza9 = accounts[0]
		const uintMhKSSsG = BigInt("276")
		const addressXTAx7Nw = accounts[0]
		const addressKbFglUy = accounts[4]
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const uint256WiTPXaF = await NALV9P1T0Z.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressT34Up1, uintlGZ560l, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressB4Tjza9, uintPOJN4uZ, {from: accounts[4]});
		const boolIyW4qnJ = await NALV9P1T0Z.transferFrom.call(addressKbFglUy, addressXTAx7Nw, uintMhKSSsG, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		assert.equal(uint256WiTPXaF, BigInt("2000000000000000000000000000"))
		await expect(NALV9P1T0Z.burnFrom.call(addressT34Up1, uintlGZ560l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintffVKdA3 = BigInt("926")
		const uintwvgmyBs = BigInt("175")
		const addressJncH2y = accounts[1]
		const uintWyAdC8J = BigInt("1585")
		const addressGzMy2mD = accounts[3]
		const uint256zGNA8Sn = await NAL6RjIcc.burn.call(uintffVKdA3, {from: accounts[1]});
		const boolSipO2p9 = await NAL6RjIcc.increaseAllowance.call(addressJncH2y, uintwvgmyBs, {from: "0x0000000000000000000000000000000000000001"});
		await NAL6RjIcc.whenNotPaused.call({from: accounts[0]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressGzMy2mD, uintWyAdC8J, {from: accounts[4]});

		await expect(NAL6RjIcc.burn.call(uintffVKdA3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintfahEEJV = BigInt("1585")
		const addressHkyDHMi = accounts[4]
		await NAL6RjIcc.renounceAdmin.call({from: accounts[2]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressHkyDHMi, uintfahEEJV, {from: accounts[4]});

		await expect(NAL6RjIcc.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintHJHWWiK = BigInt("34")
		const addressculJWGG = accounts[0]
		const addressncXEs0e = accounts[1]
		const uintQYU67aa = BigInt("1685")
		const addressr8RZRP = accounts[0]
		const uintNTSSYRQ = BigInt("1427")
		const addressKgTIKI = accounts[1]
		const addressCzbV5kx = accounts[0]
		const uintNgTp01v = BigInt("1802")
		const addressSe4OAs2 = accounts[5]
		const uintnZCiaed = BigInt("87")
		const addressuD54dTS = accounts[0]
		const stringC1gutJ = await NALV9P1T0Z.symbol.call({from: accounts[0]});
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const boolHSKkYnE = await NALV9P1T0Z.transferFrom.call(addressncXEs0e, addressculJWGG, uintHJHWWiK, {from: accounts[3]});
		const uint256ruqOz44 = await NALV9P1T0Z.totalSupply.call({from: accounts[3]});
		const boolQuZIfBo = await NALV9P1T0Z.transfer.call(addressr8RZRP, uintQYU67aa, {from: accounts[0]});
		const boolIU8Hvg = await NALV9P1T0Z.decreaseAllowance.call(addressKgTIKI, uintNTSSYRQ, {from: accounts[5]});
		const boolYcnkCvH = await NALV9P1T0Z.unfreezeAccount.call(addressCzbV5kx, {from: accounts[3]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressSe4OAs2, uintNgTp01v, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		await NALV9P1T0Z.renounceAdmin.call({from: accounts[1]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressuD54dTS, uintnZCiaed, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		assert.equal(stringC1gutJ, "NAL")
		await expect(NALV9P1T0Z.transferFrom.call(addressncXEs0e, addressculJWGG, uintHJHWWiK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintaP7pN3F = BigInt("2016")
		const uintM8GWbXY = BigInt("566")
		const address9Yr6e9 = accounts[1]
		const uintcgs8Jir = BigInt("1569")
		const addressDQwbuzC = accounts[3]
		const boolqMIFUxp = await NAL6RjIcc.transferWithLock.call(address9Yr6e9, uintM8GWbXY, uintaP7pN3F, {from: accounts[0]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressDQwbuzC, uintcgs8Jir, {from: accounts[4]});

		assert.equal(boolqMIFUxp, true)
		await expect(NAL6RjIcc.transfer.call(addressDQwbuzC, uintcgs8Jir, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const addressQOnjrNG = "0x0000000000000000000000000000000000000001"
		const uintHZg7SQl = BigInt("34")
		const addressTWr7oHf = accounts[0]
		const addressU8OucP2 = accounts[1]
		const uintig8tysP = BigInt("1427")
		const addressLYz9qNV = accounts[1]
		const address1KhHPB = accounts[1]
		const uinticI5ebj = BigInt("1802")
		const addressAzUmb3d = accounts[5]
		const uintgjP7YVv = BigInt("76")
		const addressjIm8eiY = accounts[0]
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const uint256ApXaSq = await NALV9P1T0Z.balanceOf.call(addressQOnjrNG, {from: accounts[1]});
		const boolHSKkYnE = await NALV9P1T0Z.transferFrom.call(addressU8OucP2, addressTWr7oHf, uintHZg7SQl, {from: accounts[3]});
		const boolIU8Hvg = await NALV9P1T0Z.decreaseAllowance.call(addressLYz9qNV, uintig8tysP, {from: accounts[5]});
		const boolYcnkCvH = await NALV9P1T0Z.unfreezeAccount.call(address1KhHPB, {from: accounts[3]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressAzUmb3d, uinticI5ebj, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		await NALV9P1T0Z.renounceAdmin.call({from: accounts[1]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressjIm8eiY, uintgjP7YVv, {from: accounts[4]});

		assert.equal(boolTbeQKfb, false)
		assert.equal(uint256ApXaSq, BigInt("0"))
		await expect(NALV9P1T0Z.transferFrom.call(addressU8OucP2, addressTWr7oHf, uintHZg7SQl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV9P1T0Z = await NAL.new({from: accounts[1]});
		const uintYqvpCW = BigInt("1237")
		const address6RrjEJ = accounts[2]
		const uintFk0hAsf = BigInt("34")
		const addresss13D5pv = accounts[0]
		const addressFgCXLmk = accounts[1]
		const uintbnQb67 = BigInt("1427")
		const addressl5D3P3M = accounts[1]
		const addressR7SSDLD = accounts[0]
		const uintgJ3CSY5 = BigInt("1802")
		const addressHBUkcCy = accounts[6]
		const uintfHQ6Mu6 = BigInt("76")
		const addressl0iKU7 = accounts[0]
		const uint256FKBMlUU = await NALV9P1T0Z.totalSupply.call({from: accounts[3]});
		const boolwNjXezl = await NALV9P1T0Z.decreaseAllowance.call(address6RrjEJ, uintYqvpCW, {from: accounts[0]});
		const boolTbeQKfb = await NALV9P1T0Z.paused.call({from: accounts[1]});
		const boolHSKkYnE = await NALV9P1T0Z.transferFrom.call(addressFgCXLmk, addresss13D5pv, uintFk0hAsf, {from: accounts[3]});
		const boolIU8Hvg = await NALV9P1T0Z.decreaseAllowance.call(addressl5D3P3M, uintbnQb67, {from: accounts[5]});
		const boolYcnkCvH = await NALV9P1T0Z.unfreezeAccount.call(addressR7SSDLD, {from: accounts[3]});
		const addressVCznK7G = await NALV9P1T0Z.burnFrom.call(addressHBUkcCy, uintgJ3CSY5, {from: accounts[3]});
		const stringqMN1l6 = await NALV9P1T0Z.name.call({from: accounts[5]});
		await NALV9P1T0Z.renounceAdmin.call({from: accounts[1]});
		const boolGnIvJ6U = await NALV9P1T0Z.decreaseAllowance.call(addressl0iKU7, uintfHQ6Mu6, {from: accounts[4]});

		assert.equal(uint256FKBMlUU, BigInt("2000000000000000000000000000"))
		await expect(NALV9P1T0Z.decreaseAllowance.call(address6RrjEJ, uintYqvpCW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addressCPFVw5 = accounts[4]
		const uintnCaQnDO = BigInt("1046")
		const uintPVT4Sls = BigInt("1349")
		const addressJqNqZH = accounts[6]
		const addressonDB57C = accounts[4]
		const addressvHpAnRY = await NAL6RjIcc.upgradeTo.call(addressCPFVw5, {from: accounts[0]});
		const uint256y2cRg2d = await NAL6RjIcc.burn.call(uintnCaQnDO, {from: accounts[3]});
		const booliZJv6Za = await NAL6RjIcc.transferFrom.call(addressonDB57C, addressJqNqZH, uintPVT4Sls, {from: accounts[0]});

		await expect(NAL6RjIcc.burn.call(uintnCaQnDO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addressGAF40FR = accounts[4]
		const addressfvVnYN2 = accounts[1]
		const uintG5foB0u = BigInt("52")
		const addressmXVMzXY = accounts[5]
		const addressOFYOI62 = accounts[3]
		const addresstvVmvNy = accounts[1]
		const uintfUMwRP = BigInt("1582")
		const addressOTuXCiW = accounts[3]
		const uint256BbMImd = await NAL6RjIcc.balanceOf.call(addressGAF40FR, {from: accounts[3]});
		const boolEC5pNZr = await NAL6RjIcc.isAdmin.call(addressfvVnYN2, {from: accounts[0]});
		const boolkEZBWoQ = await NAL6RjIcc.increaseAllowance.call(addressmXVMzXY, uintG5foB0u, {from: accounts[3]});
		const uint256kAjDwgS = await NAL6RjIcc.allowance.call(addresstvVmvNy, addressOFYOI62, {from: accounts[3]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressOTuXCiW, uintfUMwRP, {from: accounts[4]});

		assert.equal(boolEC5pNZr, false)
		assert.equal(boolkEZBWoQ, true)
		assert.equal(uint256BbMImd, BigInt("0"))
		assert.equal(uint256kAjDwgS, BigInt("0"))
		await expect(NAL6RjIcc.transfer.call(addressOTuXCiW, uintfUMwRP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addresst6oYLvy = accounts[3]
		const uintcTKebJt = BigInt("1349")
		const addressW2cJnU4 = accounts[5]
		const addressRcpua0D = accounts[5]
		const boolYcw3rHI = await NAL6RjIcc.unfreezeAccount.call(addresst6oYLvy, {from: accounts[0]});
		await NAL6RjIcc.onlyOwner.call({from: accounts[2]});
		const booliZJv6Za = await NAL6RjIcc.transferFrom.call(addressRcpua0D, addressW2cJnU4, uintcTKebJt, {from: accounts[0]});

		await expect(NAL6RjIcc.unfreezeAccount.call(addresst6oYLvy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addressB5B0vjf = accounts[6]
		const addressrTJGyBE = accounts[1]
		const addressNJ0vjcZ = accounts[0]
		const uint256BbMImd = await NAL6RjIcc.balanceOf.call(addressB5B0vjf, {from: accounts[3]});
		const uint256h1Se7X = await NAL6RjIcc.balanceOf.call(addressrTJGyBE, {from: accounts[4]});
		const addressZi5QpUx = await NAL6RjIcc.addAdmin.call(addressNJ0vjcZ, {from: accounts[0]});

		assert.equal(uint256BbMImd, BigInt("0"))
		assert.equal(uint256h1Se7X, BigInt("0"))
		await expect(NAL6RjIcc.addAdmin.call(addressNJ0vjcZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintS0umyf = BigInt("1403")
		const addresscwVB6an = accounts[1]
		const address5AiZeW = accounts[2]
		const uintSeCQAac = BigInt("1349")
		const addressDQnthQ = accounts[5]
		const addressWjSmXa5 = accounts[5]
		await NAL6RjIcc.renounceAdmin.call({from: accounts[0]});
		const boolXJTU8Th = await NAL6RjIcc.transferFrom.call(address5AiZeW, addresscwVB6an, uintS0umyf, {from: "0x0000000000000000000000000000000000000001"});
		const booliZJv6Za = await NAL6RjIcc.transferFrom.call(addressWjSmXa5, addressDQnthQ, uintSeCQAac, {from: accounts[0]});

		await expect(NAL6RjIcc.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addressphOaijv = accounts[0]
		const addressQ5ntUCD = accounts[4]
		const uintr24Zsrk = BigInt("1552")
		const addressY1zngQ4 = accounts[3]
		const uint8zSL1DrO = await NAL6RjIcc.decimals.call({from: accounts[3]});
		const addressug9QoqJ = await NAL6RjIcc.removeAdmin.call(addressphOaijv, {from: accounts[2]});
		const boolYCJ2eIY = await NAL6RjIcc.isOwner.call(addressQ5ntUCD, {from: accounts[1]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressY1zngQ4, uintr24Zsrk, {from: accounts[4]});

		assert.equal(uint8zSL1DrO, BigInt("18"))
		await expect(NAL6RjIcc.removeAdmin.call(addressphOaijv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const uintFayEdZ5 = BigInt("212")
		const uintJRaRsZ = BigInt("991")
		const addressUavPtJf = accounts[1]
		const uintwvhH0BZ = BigInt("1585")
		const addressC21GdIJ = accounts[4]
		const addressSYGHT8p = accounts[1]
		const addresszNDY38m = accounts[0]
		const addressKpW7ytF = "0x0000000000000000000000000000000000000001"
		const boolQNk36hC = await NAL6RjIcc.lock.call(addressUavPtJf, uintJRaRsZ, uintFayEdZ5, {from: accounts[0]});
		const bool785u1s = await NAL6RjIcc.transfer.call(addressC21GdIJ, uintwvhH0BZ, {from: accounts[4]});
		const addresshJkIEjI = await NAL6RjIcc.removeAdmin.call(addressSYGHT8p, {from: accounts[0]});
		const uint256I6s7oZK = await NAL6RjIcc.allowance.call(addressKpW7ytF, addresszNDY38m, {from: accounts[0]});

		await expect(NAL6RjIcc.lock.call(addressUavPtJf, uintJRaRsZ, uintFayEdZ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL6RjIcc = await NAL.new({from: accounts[0]});
		const addressdhz5Koo = accounts[4]
		const addressDTP6xy = accounts[6]
		const boolMfen6PC = await NAL6RjIcc.freezeAccount.call(addressdhz5Koo, {from: accounts[0]});
		await NAL6RjIcc.pause.call({from: accounts[3]});
		const uint256BbMImd = await NAL6RjIcc.balanceOf.call(addressDTP6xy, {from: accounts[3]});

		assert.equal(boolMfen6PC, true)
		await expect(NAL6RjIcc.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxZdY8to = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxy4KGII = BigInt("884")
		const addressjQy5air = accounts[2]
		const uintwY6MM25 = BigInt("388")
		const addressgZa7VU = accounts[1]
		const uint256Kx2wZo = await NALxZdY8to.burn.call(uintxy4KGII, {from: accounts[5]});
		await NALxZdY8to.onlyOwner.call({from: accounts[0]});
		const boolcqwS4wH = await NALxZdY8to.unfreezeAccount.call(addressjQy5air, {from: accounts[2]});
		const uint8wYIgyFx = await NALxZdY8to.decimals.call({from: accounts[5]});
		await NALxZdY8to.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnxiMIWJ = await NALxZdY8to.approve.call(addressgZa7VU, uintwY6MM25, {from: accounts[1]});
	});
})