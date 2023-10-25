const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYJsLoLu = await KPLAY.new({from: accounts[4]});
		const uintgh4VvR6 = BigInt("1886")
		const addressIOhdpDM = accounts[2]
		const uintulkvNqR = BigInt("1175")
		const addressAR5gjwA = accounts[4]
		const uint24qoGu = BigInt("1366")
		const uintEnITJjo = BigInt("577")
		const addressj4iJOF = accounts[2]
		await KPLAYJsLoLu.whenPaused.call({from: accounts[0]});
		await KPLAYJsLoLu.lockState.call(addressIOhdpDM, uintgh4VvR6, {from: accounts[0]});
		const boolPmDKHlK = await KPLAYJsLoLu.decreaseAllowance.call(addressAR5gjwA, uintulkvNqR, {from: "0x0000000000000000000000000000000000000001"});
		const boolqIgTiIb = await KPLAYJsLoLu.transferWithLock.call(addressj4iJOF, uintEnITJjo, uint24qoGu, {from: accounts[0]});

		await expect(KPLAYJsLoLu.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEiuXsl6 = await KPLAY.new({from: accounts[0]});
		const uintgIVXF0g = BigInt("577")
		const addressh60fShX = accounts[1]
		const addressSFqgtE3 = "0x0000000000000000000000000000000000000001"
		const addressxLuNkey = accounts[0]
		const addressurO2yN5 = accounts[1]
		const uintHR641FW = BigInt("1376")
		const addressCEI7Ql = accounts[0]
		const boolRKzdBKX = await KPLAYEiuXsl6.transferFrom.call(addressSFqgtE3, addressh60fShX, uintgIVXF0g, {from: accounts[3]});
		await KPLAYEiuXsl6.unpause.call({from: accounts[2]});
		const uint256kO6CBD = await KPLAYEiuXsl6.balanceOf.call(addressxLuNkey, {from: accounts[4]});
		const uint256VOS5VrU = await KPLAYEiuXsl6.lockCount.call(addressurO2yN5, {from: accounts[3]});
		const addressqd4Zi9d = await KPLAYEiuXsl6.burn.call(addressCEI7Ql, uintHR641FW, {from: accounts[1]});

		await expect(KPLAYEiuXsl6.transferFrom.call(addressSFqgtE3, addressh60fShX, uintgIVXF0g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKNDG3iz = await KPLAY.new({from: accounts[5]});
		const uintKwBH48 = BigInt("72")
		const addressfxAok1 = accounts[4]
		const uintkCDKCsb = BigInt("1145")
		const addressvpnSHZ2 = accounts[1]
		const addresstW9Axjy = accounts[1]
		const uint0TAuCH = BigInt("1173")
		const addressm5qOGuI = accounts[4]
		const addressjoao34N = accounts[1]
		await KPLAYKNDG3iz.renounceOwnership.call({from: accounts[2]});
		const addressFndtzVX = await KPLAYKNDG3iz.unlock.call(addressfxAok1, uintKwBH48, {from: accounts[3]});
		const uint256I76MhSv = await KPLAYKNDG3iz.currentTime.call({from: accounts[0]});
		const boolK3JiLLD = await KPLAYKNDG3iz.transferFrom.call(addresstW9Axjy, addressvpnSHZ2, uintkCDKCsb, {from: accounts[3]});
		const boolLtAWVMZ = await KPLAYKNDG3iz.increaseAllowance.call(addressm5qOGuI, uint0TAuCH, {from: accounts[3]});
		const uint256N3wsZkC = await KPLAYKNDG3iz.balanceOf.call(addressjoao34N, {from: accounts[3]});

		await expect(KPLAYKNDG3iz.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYObohfr0 = await KPLAY.new({from: accounts[1]});
		const uintR5ZzAki = BigInt("1168")
		const addressPu1zQMj = accounts[3]
		const uintBj816WQ = BigInt("1271")
		const uintRAGaIA = BigInt("1109")
		const addressJRX1mgu = accounts[2]
		const addressy9juv6D = accounts[0]
		const boolGMpdDI = await KPLAYObohfr0.decreaseAllowance.call(addressPu1zQMj, uintR5ZzAki, {from: accounts[4]});
		await KPLAYObohfr0.pause.call({from: accounts[1]});
		await KPLAYObohfr0.unpause.call({from: accounts[3]});
		const boolNieMdWk = await KPLAYObohfr0.transferWithLock.call(addressJRX1mgu, uintRAGaIA, uintBj816WQ, {from: accounts[5]});
		const uint256byF3fCB = await KPLAYObohfr0.lockCount.call(addressy9juv6D, {from: accounts[4]});

		await expect(KPLAYObohfr0.decreaseAllowance.call(addressPu1zQMj, uintR5ZzAki, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYoSxDzjJ = await KPLAY.new({from: accounts[2]});
		const uinty5Zb6nm = BigInt("833")
		const addressXHjBo8A = accounts[5]
		const uintnERfP3X = BigInt("691")
		const addressQHW79ae = accounts[3]
		const addressmnz2T8n = accounts[2]
		const addressRxKqNKZ = accounts[2]
		const boolyXlCXFK = await KPLAYoSxDzjJ.transfer.call(addressXHjBo8A, uinty5Zb6nm, {from: accounts[1]});
		const boolEiWEsN = await KPLAYoSxDzjJ.increaseAllowance.call(addressQHW79ae, uintnERfP3X, {from: accounts[4]});
		await KPLAYoSxDzjJ.pause.call({from: accounts[4]});
		const uint256KIbHpri = await KPLAYoSxDzjJ.balanceOf.call(addressmnz2T8n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gV8gcwy = await KPLAYoSxDzjJ.balanceOf.call(addressRxKqNKZ, {from: accounts[2]});

		await expect(KPLAYoSxDzjJ.transfer.call(addressXHjBo8A, uinty5Zb6nm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrfhRgbj = await KPLAY.new({from: accounts[1]});
		const uintCy06foB = BigInt("1741")
		const addressxUXdgbH = accounts[0]
		const addressNoMEWH = accounts[0]
		const uintK55gilF = BigInt("1697")
		const addressak8Y7QN = "0x0000000000000000000000000000000000000001"
		const addressq4B6Bx = accounts[0]
		const addressjuMyBst = accounts[1]
		await KPLAYrfhRgbj.lockState.call(addressxUXdgbH, uintCy06foB, {from: accounts[0]});
		const uint256R6cVS6P = await KPLAYrfhRgbj.balanceOf.call(addressNoMEWH, {from: accounts[2]});
		const boolOv4UuDo = await KPLAYrfhRgbj.transferFrom.call(addressq4B6Bx, addressak8Y7QN, uintK55gilF, {from: accounts[4]});
		const uint256H6hf4qi = await KPLAYrfhRgbj.balanceOf.call(addressjuMyBst, {from: accounts[4]});

		await expect(KPLAYrfhRgbj.lockState.call(addressxUXdgbH, uintCy06foB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIQEWjdm = await KPLAY.new({from: accounts[1]});
		const uintvLZeltL = BigInt("259")
		const uintVeLWCnT = BigInt("568")
		const addressrWDNw0V = accounts[1]
		const addressYijS5FD = accounts[0]
		const uint256dqi9Gh = await KPLAYIQEWjdm.currentTime.call({from: accounts[5]});
		const addressAV01o8n = await KPLAYIQEWjdm.lockAfter.call(addressrWDNw0V, uintVeLWCnT, uintvLZeltL, {from: accounts[2]});
		const addressdizS80w = await KPLAYIQEWjdm.freeze.call(addressYijS5FD, {from: accounts[5]});

		assert.equal(uint256dqi9Gh, BigInt("1630225681"))
		await expect(KPLAYIQEWjdm.lockAfter.call(addressrWDNw0V, uintVeLWCnT, uintvLZeltL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIQEWjdm = await KPLAY.new({from: accounts[1]});
		const addressHfNZFN = accounts[4]
		const uintiEX44n = BigInt("1219")
		const uintxzs8C1U = BigInt("1800")
		const addressjv6qchw = accounts[3]
		const uintnHOpDhM = BigInt("259")
		const uintHGhRag = BigInt("592")
		const addressPKibCd3 = accounts[1]
		const uint256a410mBi = await KPLAYIQEWjdm.lockCount.call(addressHfNZFN, {from: "0x0000000000000000000000000000000000000001"});
		const addressUtP4wyq = await KPLAYIQEWjdm.lockAfter.call(addressjv6qchw, uintxzs8C1U, uintiEX44n, {from: accounts[4]});
		const addressAV01o8n = await KPLAYIQEWjdm.lockAfter.call(addressPKibCd3, uintHGhRag, uintnHOpDhM, {from: accounts[2]});

		assert.equal(uint256a410mBi, BigInt("0"))
		await expect(KPLAYIQEWjdm.lockAfter.call(addressjv6qchw, uintxzs8C1U, uintiEX44n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKkwesQp = await KPLAY.new({from: accounts[3]});
		const uint890f7V = BigInt("1142")
		const addressTNhJlbn = accounts[2]
		const uintpJixwcZ = BigInt("1060")
		const addresscshxTe2 = accounts[2]
		const addresssLNjgsx = await KPLAYKkwesQp.unlock.call(addressTNhJlbn, uint890f7V, {from: accounts[3]});
		await KPLAYKkwesQp.whenNotFrozen.call({from: accounts[4]});
		const addressX3LoXDc = await KPLAYKkwesQp.unlock.call(addresscshxTe2, uintpJixwcZ, {from: accounts[2]});
		await KPLAYKkwesQp.whenNotFrozen.call({from: accounts[3]});

		await expect(KPLAYKkwesQp.unlock.call(addressTNhJlbn, uint890f7V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addressmv6V5f = accounts[3]
		const uintH20DkeK = BigInt("609")
		const uintkw4uX08 = BigInt("412")
		const addresslrghyOm = accounts[1]
		const uintoVxG41W = BigInt("464")
		const addressqQNwmHY = accounts[5]
		const boolU5u0TOd = await KPLAYzoytgK7.isFrozen.call(addressmv6V5f, {from: accounts[4]});
		const boolp3M4TFN = await KPLAYzoytgK7.transferWithLockAfter.call(addresslrghyOm, uintkw4uX08, uintH20DkeK, {from: accounts[1]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressqQNwmHY, uintoVxG41W, {from: accounts[4]});
		await KPLAYzoytgK7.whenNotPaused.call({from: accounts[0]});

		assert.equal(boolU5u0TOd, false)
		await expect(KPLAYzoytgK7.transferWithLockAfter.call(addresslrghyOm, uintkw4uX08, uintH20DkeK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintbGNwcll = BigInt("961")
		const addressNXVl1Gm = accounts[1]
		const uintJN8JxzM = BigInt("1358")
		const addressJ0xnluO = accounts[5]
		const uintc7956xr = BigInt("439")
		const addressYx2zfI7 = accounts[5]
		const boolceXEGR = await KPLAYzoytgK7.approve.call(addressNXVl1Gm, uintbGNwcll, {from: accounts[1]});
		const boolwmSQzF0 = await KPLAYzoytgK7.increaseAllowance.call(addressJ0xnluO, uintJN8JxzM, {from: accounts[2]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressYx2zfI7, uintc7956xr, {from: accounts[4]});

		assert.equal(boolceXEGR, true)
		assert.equal(boolwmSQzF0, true)
		await expect(KPLAYzoytgK7.transfer.call(addressYx2zfI7, uintc7956xr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintdAqqg3 = BigInt("447")
		const addresslixSTyY = accounts[5]
		const uint256pDvRxWE = await KPLAYzoytgK7.totalSupply.call({from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addresslixSTyY, uintdAqqg3, {from: accounts[4]});

		assert.equal(uint256pDvRxWE, BigInt("10000000000000000"))
		await expect(KPLAYzoytgK7.transfer.call(addresslixSTyY, uintdAqqg3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintIJaJyvY = BigInt("1699")
		const addressijt2M91 = accounts[3]
		const uintBcfVcOK = BigInt("447")
		const addressk0tgq0g = accounts[5]
		const addresscn8OT74 = await KPLAYzoytgK7.burn.call(addressijt2M91, uintIJaJyvY, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressk0tgq0g, uintBcfVcOK, {from: accounts[4]});
		await KPLAYzoytgK7.whenNotPaused.call({from: accounts[2]});

		await expect(KPLAYzoytgK7.burn.call(addressijt2M91, uintIJaJyvY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYn3E3ODC = await KPLAY.new({from: accounts[4]});
		const uintVYsdoHJ = BigInt("2047")
		const addressInrkpNK = accounts[1]
		const uintZr4S4gp = BigInt("611")
		const uintrJHQQRl = BigInt("1576")
		const addressR5EaB8m = "0x0000000000000000000000000000000000000001"
		const addressvZ1MU5D = accounts[1]
		const boolZVA0MHJ = await KPLAYn3E3ODC.mint.call(addressInrkpNK, uintVYsdoHJ, {from: accounts[4]});
		const boolgA1RDs4 = await KPLAYn3E3ODC.transferWithLock.call(addressR5EaB8m, uintrJHQQRl, uintZr4S4gp, {from: accounts[1]});
		await KPLAYn3E3ODC.whenPaused.call({from: accounts[5]});
		await KPLAYn3E3ODC.onlyOwner.call({from: accounts[4]});
		const addressMYNyfNh = await KPLAYn3E3ODC.unfreeze.call(addressvZ1MU5D, {from: accounts[1]});

		assert.equal(boolZVA0MHJ, true)
		await expect(KPLAYn3E3ODC.transferWithLock.call(addressR5EaB8m, uintrJHQQRl, uintZr4S4gp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnqzv5RD = await KPLAY.new({from: accounts[1]});
		const uintvD0MZbW = BigInt("1986")
		const uintcY4p4X5 = BigInt("1222")
		const addressNcNv4sJ = accounts[3]
		const uintAZzoWZ8 = BigInt("1449")
		const addresskvCT12P = accounts[3]
		const uintJFvr7vW = BigInt("427")
		const addresswzLisjI = accounts[2]
		const addressRTtbRPC = accounts[0]
		const boolMXfn6fm = await KPLAYnqzv5RD.transferWithLock.call(addressNcNv4sJ, uintcY4p4X5, uintvD0MZbW, {from: accounts[1]});
		const addressmO0uQAH = await KPLAYnqzv5RD.burn.call(addresskvCT12P, uintAZzoWZ8, {from: accounts[2]});
		const boolHkNKGQP = await KPLAYnqzv5RD.transferFrom.call(addressRTtbRPC, addresswzLisjI, uintJFvr7vW, {from: accounts[5]});

		assert.equal(boolMXfn6fm, true)
		await expect(KPLAYnqzv5RD.burn.call(addresskvCT12P, uintAZzoWZ8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addressD2dPIW1 = accounts[4]
		const addresswGhVn05 = accounts[5]
		const uintxxslMZ = BigInt("1096")
		const addressMusjLGS = accounts[5]
		const uint256qlgvzBO = await KPLAYzoytgK7.lockCount.call(addressD2dPIW1, {from: accounts[2]});
		const uint256CbAPCjX = await KPLAYzoytgK7.balanceOf.call(addresswGhVn05, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressMusjLGS, uintxxslMZ, {from: accounts[4]});

		assert.equal(uint256CbAPCjX, BigInt("0"))
		assert.equal(uint256qlgvzBO, BigInt("0"))
		await expect(KPLAYzoytgK7.transfer.call(addressMusjLGS, uintxxslMZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYtwno9hF = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXRFTUXL = accounts[3]
		const uintYWp2cFs = BigInt("355")
		const addressje7jRgo = accounts[2]
		const uintSICz2XX = BigInt("1725")
		const addressmI960C = accounts[4]
		const uint256DaaS3PC = await KPLAYtwno9hF.lockCount.call(addressXRFTUXL, {from: accounts[2]});
		await KPLAYtwno9hF.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await KPLAYtwno9hF.renounceOwnership.call({from: accounts[1]});
		await KPLAYtwno9hF.renounceOwnership.call({from: accounts[4]});
		const boolMMiBK9B = await KPLAYtwno9hF.mint.call(addressje7jRgo, uintYWp2cFs, {from: accounts[0]});
		const boolyWjMGZe = await KPLAYtwno9hF.mint.call(addressmI960C, uintSICz2XX, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintxPEvYL4 = BigInt("1661")
		const uintOqO775t = BigInt("1317")
		const addresswSskhQx = accounts[1]
		const uintG6VI99m = BigInt("467")
		const addressii6XJuN = accounts[5]
		const addressIqlHNx = await KPLAYzoytgK7.lock.call(addresswSskhQx, uintOqO775t, uintxPEvYL4, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressii6XJuN, uintG6VI99m, {from: accounts[4]});

		await expect(KPLAYzoytgK7.lock.call(addresswSskhQx, uintOqO775t, uintxPEvYL4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addressDJnHuiQ = accounts[1]
		const uintoLJGPBP = BigInt("447")
		const addressdpixk5P = accounts[5]
		const addressv7b8N6h = await KPLAYzoytgK7.transferOwnership.call(addressDJnHuiQ, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressdpixk5P, uintoLJGPBP, {from: accounts[4]});

		await expect(KPLAYzoytgK7.transfer.call(addressdpixk5P, uintoLJGPBP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintxdG5U0M = BigInt("1608")
		const addressdv2kuCL = accounts[2]
		const uintOkSe9fu = BigInt("443")
		const addressaCC1QWp = accounts[5]
		await KPLAYzoytgK7.renounceOwnership.call({from: accounts[0]});
		const addressuvkqGlD = await KPLAYzoytgK7.unlock.call(addressdv2kuCL, uintxdG5U0M, {from: accounts[3]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressaCC1QWp, uintOkSe9fu, {from: accounts[4]});

		await expect(KPLAYzoytgK7.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uinthBmJdj6 = BigInt("325")
		const addressUHd8Arc = accounts[4]
		const uintqcwetVn = BigInt("447")
		const addressbu1e3eP = accounts[5]
		const uint256YhwINNw = await KPLAYzoytgK7.afterTime.call(uinthBmJdj6, {from: accounts[3]});
		const boolV08VFWs = await KPLAYzoytgK7.isFrozen.call(addressUHd8Arc, {from: accounts[2]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressbu1e3eP, uintqcwetVn, {from: accounts[4]});

		assert.equal(boolV08VFWs, false)
		assert.equal(uint256YhwINNw, BigInt("1630226019"))
		await expect(KPLAYzoytgK7.transfer.call(addressbu1e3eP, uintqcwetVn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintqCO9CTl = BigInt("683")
		const uintSMSJqr8 = BigInt("1408")
		const addressZ9BJWYS = accounts[0]
		const uintq63c0c4 = BigInt("447")
		const addresshbl7H7x = accounts[6]
		const boolOCm4DpL = await KPLAYzoytgK7.transferWithLockAfter.call(addressZ9BJWYS, uintSMSJqr8, uintqCO9CTl, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addresshbl7H7x, uintq63c0c4, {from: accounts[4]});

		assert.equal(boolOCm4DpL, true)
		await expect(KPLAYzoytgK7.transfer.call(addresshbl7H7x, uintq63c0c4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addresstI1Pwoi = accounts[3]
		const addressnAruQoN = accounts[1]
		const addressMpcrRpa = accounts[4]
		const uintaUr8PlA = BigInt("178")
		const addressLuaj6G = accounts[5]
		const uint256TMHgwd = await KPLAYzoytgK7.allowance.call(addressnAruQoN, addresstI1Pwoi, {from: accounts[1]});
		const uint256qlgvzBO = await KPLAYzoytgK7.lockCount.call(addressMpcrRpa, {from: accounts[2]});
		const bool7lin1C = await KPLAYzoytgK7.mint.call(addressLuaj6G, uintaUr8PlA, {from: accounts[5]});

		assert.equal(uint256TMHgwd, BigInt("0"))
		assert.equal(uint256qlgvzBO, BigInt("0"))
		await expect(KPLAYzoytgK7.mint.call(addressLuaj6G, uintaUr8PlA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIQEWjdm = await KPLAY.new({from: accounts[1]});
		const uintUKSQxMM = BigInt("259")
		const uintHOY0EN = BigInt("573")
		const addressYa1bbtw = accounts[1]
		await KPLAYIQEWjdm.pause.call({from: accounts[1]});
		const addressAV01o8n = await KPLAYIQEWjdm.lockAfter.call(addressYa1bbtw, uintHOY0EN, uintUKSQxMM, {from: accounts[2]});

		await expect(KPLAYIQEWjdm.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintwTquf0C = BigInt("1349")
		const addressfN1cjU2 = accounts[0]
		const uintjvWMbc6 = BigInt("1430")
		const addressVFaS94G = accounts[1]
		const uintYiAhJKq = BigInt("447")
		const addressG2n0VoQ = accounts[6]
		const addressFqAYJJ5 = await KPLAYzoytgK7.burn.call(addressfN1cjU2, uintwTquf0C, {from: accounts[0]});
		const boolPuPOdXL = await KPLAYzoytgK7.decreaseAllowance.call(addressVFaS94G, uintjvWMbc6, {from: accounts[4]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressG2n0VoQ, uintYiAhJKq, {from: accounts[4]});

		await expect(KPLAYzoytgK7.decreaseAllowance.call(addressVFaS94G, uintjvWMbc6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const uintLF9KeAh = BigInt("1145")
		const uintPO4jjHH = BigInt("89")
		const addresswM8tlR = accounts[2]
		const uintxUsjrAn = BigInt("465")
		const addressY8AyLyi = accounts[5]
		const addressBasz3HP = await KPLAYzoytgK7.lockAfter.call(addresswM8tlR, uintPO4jjHH, uintLF9KeAh, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addressY8AyLyi, uintxUsjrAn, {from: accounts[4]});

		await expect(KPLAYzoytgK7.lockAfter.call(addresswM8tlR, uintPO4jjHH, uintLF9KeAh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addressogf6ldX = accounts[2]
		const uintjWuwnFE = BigInt("447")
		const addresstujDe9q = accounts[5]
		const addresstMTDyr = await KPLAYzoytgK7.unfreeze.call(addressogf6ldX, {from: accounts[0]});
		const boolcXM9xL4 = await KPLAYzoytgK7.transfer.call(addresstujDe9q, uintjWuwnFE, {from: accounts[4]});

		await expect(KPLAYzoytgK7.transfer.call(addresstujDe9q, uintjWuwnFE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzoytgK7 = await KPLAY.new({from: accounts[0]});
		const addressMSlCycM = accounts[7]
		await KPLAYzoytgK7.unpause.call({from: accounts[0]});
		const uint256CbAPCjX = await KPLAYzoytgK7.balanceOf.call(addressMSlCycM, {from: accounts[0]});

		await expect(KPLAYzoytgK7.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})