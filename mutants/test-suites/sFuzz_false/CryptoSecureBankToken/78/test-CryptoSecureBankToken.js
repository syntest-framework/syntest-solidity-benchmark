const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZbaKIQm = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressyKs5Ymj = accounts[3]
		const addressNnocO2l = accounts[4]
//		await CryptoSecureBankTokenZbaKIQm.unpause.call({from: accounts[1]});
//		await CryptoSecureBankTokenZbaKIQm.onlyOwner.call({from: accounts[0]});
//		const uint8Grf7c = await CryptoSecureBankTokenZbaKIQm.allowance.call(addressNnocO2l, addressyKs5Ymj, {from: accounts[4]});
//		const uintYZ4nf9a = await CryptoSecureBankTokenZbaKIQm.totalSupply.call({from: accounts[3]});
//		await CryptoSecureBankTokenZbaKIQm.onlyOwner.call({from: accounts[2]});

		await expect(CryptoSecureBankTokenZbaKIQm.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMzwupEb = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintFM1NMLT = BigInt("447")
		const addressBrOVi4I = accounts[5]
		const addresskynMQRV = accounts[4]
//		await CryptoSecureBankTokenMzwupEb.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenMzwupEb.whenPaused.call({from: accounts[0]});
//		const boolXtLcZxS = await CryptoSecureBankTokenMzwupEb.transfer.call(addressBrOVi4I, uintFM1NMLT, {from: accounts[0]});
//		const uintAbAaHyj = await CryptoSecureBankTokenMzwupEb.balanceOf.call(addresskynMQRV, {from: accounts[0]});
//		await CryptoSecureBankTokenMzwupEb.unpause.call({from: accounts[0]});

		await expect(CryptoSecureBankTokenMzwupEb.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEB3ZVjd = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintkAxrKFh = BigInt("2010")
		const addressbH7CGVu = accounts[2]
		const uinth9SZcNd = BigInt("1491")
		const addressNb2zWBz = accounts[1]
		const addresstcCSUVB = accounts[1]
		const addressbARoBWo = accounts[0]
//		const boolKZ5Biph = await CryptoSecureBankTokenEB3ZVjd.transfer.call(addressbH7CGVu, uintkAxrKFh, {from: accounts[2]});
//		const booln6Eo11x = await CryptoSecureBankTokenEB3ZVjd.transfer.call(addressNb2zWBz, uinth9SZcNd, {from: accounts[2]});
//		const uintyg0HE22 = await CryptoSecureBankTokenEB3ZVjd.balanceOf.call(addresstcCSUVB, {from: accounts[3]});
//		const boolQY2pdBy = await CryptoSecureBankTokenEB3ZVjd.getBlackListStatus.call(addressbARoBWo, {from: accounts[0]});

		await expect(CryptoSecureBankTokenEB3ZVjd.transfer.call(addressbH7CGVu, uintkAxrKFh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintw0HhcE = BigInt("106")
		const addressgdGugbs = accounts[2]
		const addressts1j7lG = accounts[4]
		const addressBQyNs7f = accounts[4]
		const addressIg2T8Kc = accounts[1]
		const uintSAnozl5 = BigInt("1904")
		const addressAg0jJ9 = accounts[2]
		const addressA9oSvac = accounts[1]
		const addressebw08Up = accounts[0]
		const boolVSRGqML = await CryptoSecureBankTokenNPSLwlc.approve.call(addressgdGugbs, uintw0HhcE, {from: accounts[3]});
		const uintwWOYXDq = await CryptoSecureBankTokenNPSLwlc.allowance.call(addressBQyNs7f, addressts1j7lG, {from: accounts[4]});
//		const addressZQlKBc = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressIg2T8Kc, {from: accounts[2]});
//		const boolhTJZge5 = await CryptoSecureBankTokenNPSLwlc.transferFrom.call(addressA9oSvac, addressAg0jJ9, uintSAnozl5, {from: accounts[2]});
//		const addressUO5xZC = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressebw08Up, {from: accounts[5]});

		assert.equal(boolVSRGqML, true)
		assert.equal(uintwWOYXDq, BigInt("0"))
		await expect(CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressIg2T8Kc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeneafCUqL = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressuf41m0t = accounts[4]
		const addressT0QPw0E = accounts[4]
		const uintYjbnl3 = await CryptoSecureBankTokeneafCUqL.totalSupply.call({from: accounts[1]});
//		const addressSTpYnik = await CryptoSecureBankTokeneafCUqL.setOwner2.call(addressuf41m0t, {from: accounts[2]});
//		const boolFd9CzTo = await CryptoSecureBankTokeneafCUqL.getBlackListStatus.call(addressT0QPw0E, {from: accounts[3]});
//		const addresseUIPSz8 = await CryptoSecureBankTokeneafCUqL.getOwner.call({from: accounts[0]});

		assert.equal(uintYjbnl3, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokeneafCUqL.setOwner2.call(addressuf41m0t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhY3eTOV = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresszW9MINg = accounts[1]
		const addressxOq5hAy = accounts[1]
		const addressvUOavNj = accounts[0]
		const addressSnhIxIB = accounts[5]
		const uintTkfhmjg = await CryptoSecureBankTokenhY3eTOV.totalSupply.call({from: accounts[0]});
		const uinthEyMTV = await CryptoSecureBankTokenhY3eTOV.balanceOf.call(addresszW9MINg, {from: accounts[3]});
//		const addresskeUYD0A = await CryptoSecureBankTokenhY3eTOV.addBlackList.call(addressxOq5hAy, {from: accounts[2]});
//		const addressojoQVSr = await CryptoSecureBankTokenhY3eTOV.transferOwnership.call(addressvUOavNj, {from: accounts[1]});
//		const addressDqSmeNG = await CryptoSecureBankTokenhY3eTOV.transferOwnership.call(addressSnhIxIB, {from: accounts[0]});

		assert.equal(uintTkfhmjg, BigInt("100000000000000000000000000"))
		assert.equal(uinthEyMTV, BigInt("0"))
		await expect(CryptoSecureBankTokenhY3eTOV.addBlackList.call(addressxOq5hAy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyupkYvX = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintUBJCt6U = BigInt("501")
		const addressf4sqzVB = accounts[1]
		const addressgr9Vfv9 = accounts[0]
		const addressqhjn6bh = accounts[4]
		const addressxgRK18 = accounts[0]
		const uintX9GnUcX = BigInt("1145")
//		const boolKeeJ23y = await CryptoSecureBankTokenyupkYvX.transferFrom.call(addressgr9Vfv9, addressf4sqzVB, uintUBJCt6U, {from: accounts[5]});
//		const boolZwNQwPG = await CryptoSecureBankTokenyupkYvX.deprecate.call(addressqhjn6bh, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjjSjy28 = await CryptoSecureBankTokenyupkYvX.addBlackList.call(addressxgRK18, {from: accounts[5]});
//		const uintKpqd0LY = await CryptoSecureBankTokenyupkYvX.onlyPayloadSize.call(uintX9GnUcX, {from: accounts[0]});
//		await CryptoSecureBankTokenyupkYvX.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenyupkYvX.transferFrom.call(addressgr9Vfv9, addressf4sqzVB, uintUBJCt6U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVeLZigJ = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressZ3JSinF = accounts[2]
		const addressOJtSerO = accounts[4]
//		const addressjyLwyjQ = await CryptoSecureBankTokenVeLZigJ.transferOwnership.call(addressZ3JSinF, {from: accounts[4]});
//		const addressxVcbVko = await CryptoSecureBankTokenVeLZigJ.transferOwnership.call(addressOJtSerO, {from: accounts[1]});

		await expect(CryptoSecureBankTokenVeLZigJ.transferOwnership.call(addressZ3JSinF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintz9MiRAL = BigInt("106")
		const addressvfWA4g = accounts[2]
		const addressQXIOIfh = accounts[4]
		const addressjHp7I6x = accounts[5]
		const uintLl9MM1 = BigInt("620")
		const addresshMQTRa = accounts[3]
		const addresskE9FS2e = accounts[3]
		const addressYwzQ6Xn = accounts[2]
		const addresssfI5omM = accounts[1]
		const addressyjw24fu = accounts[0]
		const boolVSRGqML = await CryptoSecureBankTokenNPSLwlc.approve.call(addressvfWA4g, uintz9MiRAL, {from: accounts[3]});
		const uintwWOYXDq = await CryptoSecureBankTokenNPSLwlc.allowance.call(addressjHp7I6x, addressQXIOIfh, {from: accounts[4]});
		const boolRkq0oGb = await CryptoSecureBankTokenNPSLwlc.transfer.call(addresshMQTRa, uintLl9MM1, {from: accounts[3]});
		const uintqBXWxq = await CryptoSecureBankTokenNPSLwlc.allowance.call(addressYwzQ6Xn, addresskE9FS2e, {from: accounts[4]});
//		const addressZQlKBc = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addresssfI5omM, {from: accounts[2]});
//		const addressUO5xZC = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressyjw24fu, {from: accounts[5]});

		assert.equal(boolRkq0oGb, true)
		assert.equal(boolVSRGqML, true)
		assert.equal(uintqBXWxq, BigInt("0"))
		assert.equal(uintwWOYXDq, BigInt("0"))
		await expect(CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addresssfI5omM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWiCyCam = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressZWPEw4n = accounts[3]
		const uintAnWK9Nx = BigInt("1849")
		const addresszdrCh7U = accounts[1]
		const addressgS5RL6F = accounts[0]
		const addressZFGFwT = accounts[4]
		const addressFKIgUN = "0x0000000000000000000000000000000000000001"
		const addressQOtkuKH = await CryptoSecureBankTokenWiCyCam.removeBlackList.call(addressZWPEw4n, {from: accounts[3]});
//		await CryptoSecureBankTokenWiCyCam.whenPaused.call({from: accounts[4]});
//		const boolvORYHAm = await CryptoSecureBankTokenWiCyCam.transferFrom.call(addressgS5RL6F, addresszdrCh7U, uintAnWK9Nx, {from: accounts[3]});
//		const addressV11Mwim = await CryptoSecureBankTokenWiCyCam.removeBlackList.call(addressZFGFwT, {from: accounts[4]});
//		const addressGl0Em8 = await CryptoSecureBankTokenWiCyCam.removeBlackList.call(addressFKIgUN, {from: accounts[2]});

		await expect(CryptoSecureBankTokenWiCyCam.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxhg7jgt = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintAGVkvNx = BigInt("314")
		const addressUzEDsZm = accounts[1]
		const addressVhPpaak = accounts[1]
		const addressPoZmHOP = await CryptoSecureBankTokenxhg7jgt.getOwner.call({from: accounts[3]});
//		await CryptoSecureBankTokenxhg7jgt.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolX2Sqoca = await CryptoSecureBankTokenxhg7jgt.transferFrom.call(addressVhPpaak, addressUzEDsZm, uintAGVkvNx, {from: accounts[4]});

		assert.equal(addressPoZmHOP, 0x3446d5bcc9AF25b7D468DC8a87c990752c331D4E)
		await expect(CryptoSecureBankTokenxhg7jgt.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinttJILNtq = BigInt("1231")
		const addresspPDadHq = accounts[2]
		const addressboyEZN6 = "0x0000000000000000000000000000000000000001"
		const uintYZh3wJV = BigInt("859")
		const addressJkzHQf = accounts[0]
		const addressigNhXBL = accounts[4]
		const addressMAzyTMv = accounts[5]
		const uintpmQbiQo = BigInt("1628")
		const addressFFAgPAa = accounts[2]
		const addressSlWWqP = accounts[0]
		const boolVSRGqML = await CryptoSecureBankTokenNPSLwlc.approve.call(addresspPDadHq, uinttJILNtq, {from: accounts[3]});
		const boolQozKfmx = await CryptoSecureBankTokenNPSLwlc.deprecate.call(addressboyEZN6, {from: accounts[3]});
		const boolFgr7l3R = await CryptoSecureBankTokenNPSLwlc.approve.call(addressJkzHQf, uintYZh3wJV, {from: accounts[5]});
		const uintwWOYXDq = await CryptoSecureBankTokenNPSLwlc.allowance.call(addressMAzyTMv, addressigNhXBL, {from: accounts[4]});
		const boolEgTgOJQ = await CryptoSecureBankTokenNPSLwlc.approve.call(addressFFAgPAa, uintpmQbiQo, {from: accounts[3]});
//		const addressUO5xZC = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressSlWWqP, {from: accounts[5]});

		assert.equal(boolEgTgOJQ, true)
		assert.equal(boolFgr7l3R, true)
		assert.equal(boolQozKfmx, true)
		assert.equal(boolVSRGqML, true)
		assert.equal(uintwWOYXDq, BigInt("0"))
		await expect(CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressSlWWqP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNaPBC1U = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressNq20Wi4 = accounts[1]
		const uintMk4yRP1 = BigInt("2018")
		const addressFJIkTDf = accounts[2]
		const uintAKecAnO = await CryptoSecureBankTokenNaPBC1U.totalSupply.call({from: accounts[0]});
		const boolUKyLITh = await CryptoSecureBankTokenNaPBC1U.getBlackListStatus.call(addressNq20Wi4, {from: accounts[1]});
		const boolV4SNpQH = await CryptoSecureBankTokenNaPBC1U.approve.call(addressFJIkTDf, uintMk4yRP1, {from: accounts[4]});
//		await CryptoSecureBankTokenNaPBC1U.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUKyLITh, false)
		assert.equal(boolV4SNpQH, true)
		assert.equal(uintAKecAnO, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenNaPBC1U.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintxcbHKIy = BigInt("1044")
		const uintaE0PkaS = BigInt("862")
		const uintGGpgscB = BigInt("623")
		const addressBZa837q = accounts[3]
		const uintwnAt22U = BigInt("1461")
		const addressVBC3eV9 = accounts[1]
		const addressYaGLINv = accounts[0]
//		const uintu7B9tpp = await CryptoSecureBankTokenNPSLwlc.setParams.call(uintaE0PkaS, uintxcbHKIy, {from: accounts[3]});
//		await CryptoSecureBankTokenNPSLwlc.pause.call({from: accounts[1]});
//		const boolRkq0oGb = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressBZa837q, uintGGpgscB, {from: accounts[3]});
//		const boolz3wOpFy = await CryptoSecureBankTokenNPSLwlc.transferFrom.call(addressYaGLINv, addressVBC3eV9, uintwnAt22U, {from: accounts[1]});

		await expect(CryptoSecureBankTokenNPSLwlc.setParams.call(uintaE0PkaS, uintxcbHKIy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvHJqw2P = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoGTsHQz = accounts[4]
		const addressiASxm0 = "0x0000000000000000000000000000000000000001"
		const addressN8tusss = accounts[4]
		const uintUWUJAZ = BigInt("293")
		const uintOSTdre1 = BigInt("1024")
		const addressHarj2w9 = await CryptoSecureBankTokenvHJqw2P.setOwner2.call(addressoGTsHQz, {from: accounts[0]});
		const boolw3ZORqB = await CryptoSecureBankTokenvHJqw2P.getBlackListStatus.call(addressiASxm0, {from: accounts[2]});
		const uintUDoM5NH = await CryptoSecureBankTokenvHJqw2P.totalSupply.call({from: accounts[1]});
		const addressVuY9jYn = await CryptoSecureBankTokenvHJqw2P.destroyBlackFunds.call(addressN8tusss, {from: accounts[0]});
		const boolrTYJ36L = await CryptoSecureBankTokenvHJqw2P.redeem.call(uintUWUJAZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintueMQCOS = await CryptoSecureBankTokenvHJqw2P.onlyPayloadSize.call(uintOSTdre1, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressm9Hex0X = accounts[3]
		const uintypKnPsL = BigInt("620")
		const addressLBpqllG = accounts[5]
		const addressjEaqWW = await CryptoSecureBankTokenNPSLwlc.transferOwnership.call(addressm9Hex0X, {from: accounts[3]});
		const boolRkq0oGb = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressLBpqllG, uintypKnPsL, {from: accounts[3]});

		assert.equal(boolRkq0oGb, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintzYR9ynP = BigInt("1203")
		const addressbOLZph = accounts[3]
		const uintPDHfgQ8 = BigInt("881")
		const boolVSRGqML = await CryptoSecureBankTokenNPSLwlc.approve.call(addressbOLZph, uintzYR9ynP, {from: accounts[3]});
		const bool7yiwwk = await CryptoSecureBankTokenNPSLwlc.redeem.call(uintPDHfgQ8, {from: accounts[3]});

		assert.equal(bool7yiwwk, true)
		assert.equal(boolVSRGqML, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenaIz4bcD = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressUndnw1X = accounts[1]
		const uintdElmfM = BigInt("713")
		const addressR68aSap = accounts[3]
		const addressvVKbPLa = await CryptoSecureBankTokenaIz4bcD.addBlackList.call(addressUndnw1X, {from: accounts[2]});
//		const uintGWzipZ = await CryptoSecureBankTokenaIz4bcD.onlyPayloadSize.call(uintdElmfM, {from: accounts[0]});
//		const uintH2UVN1Q = await CryptoSecureBankTokenaIz4bcD.balanceOf.call(addressR68aSap, {from: accounts[4]});

		await expect(CryptoSecureBankTokenaIz4bcD.onlyPayloadSize.call(uintdElmfM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenaIz4bcD = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintPgxbpw2 = BigInt("469")
		const addressODLGCf = accounts[2]
		const addressuBccGB1 = accounts[4]
		const boolkkdKlRa = await CryptoSecureBankTokenaIz4bcD.approve.call(addressODLGCf, uintPgxbpw2, {from: accounts[3]});
		const uintH2UVN1Q = await CryptoSecureBankTokenaIz4bcD.balanceOf.call(addressuBccGB1, {from: accounts[4]});
//		await CryptoSecureBankTokenaIz4bcD.pause.call({from: accounts[2]});

		assert.equal(boolkkdKlRa, true)
		assert.equal(uintH2UVN1Q, BigInt("0"))
		await expect(CryptoSecureBankTokenaIz4bcD.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressawkqbDQ = accounts[4]
		const uintwkB1M1h = BigInt("1452")
		const addressAsRa6jr = accounts[2]
		const uintxdPpD4K = BigInt("34")
		const addressJUp89H = accounts[3]
		const addressXTOqqut = accounts[3]
		const addressnX3M2CX = await CryptoSecureBankTokenNPSLwlc.getOwner.call({from: accounts[4]});
		const addressl0Z2xUL = await CryptoSecureBankTokenNPSLwlc.setOwner2.call(addressawkqbDQ, {from: accounts[3]});
		const boolWODFvF = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressAsRa6jr, uintwkB1M1h, {from: accounts[3]});
//		const boolkKjCOnq = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressJUp89H, uintxdPpD4K, {from: accounts[4]});
//		const addresswoPh4Ge = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressXTOqqut, {from: accounts[4]});

		assert.equal(addressnX3M2CX, 0xC554F54f5A7840a776dadCf2862c354b73338b05)
		assert.equal(boolWODFvF, true)
		await expect(CryptoSecureBankTokenNPSLwlc.transfer.call(addressJUp89H, uintxdPpD4K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const address5B92XM = accounts[1]
		const addressumRhPLQ = accounts[0]
		const uintNy5uy09 = BigInt("36")
		const addressGyzQOC = accounts[4]
		const uintt1iB4K0 = await CryptoSecureBankTokenNPSLwlc.balanceOf.call(address5B92XM, {from: accounts[3]});
//		const addressSh2xc3S = await CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressumRhPLQ, {from: accounts[3]});
//		const boolkKjCOnq = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressGyzQOC, uintNy5uy09, {from: accounts[4]});

		assert.equal(uintt1iB4K0, BigInt("0"))
		await expect(CryptoSecureBankTokenNPSLwlc.destroyBlackFunds.call(addressumRhPLQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNPSLwlc = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintZNTSNB0 = BigInt("0")
		const addressHKhVjmO = accounts[3]
		const boolkKjCOnq = await CryptoSecureBankTokenNPSLwlc.transfer.call(addressHKhVjmO, uintZNTSNB0, {from: accounts[4]});

		assert.equal(boolkKjCOnq, true)
	});
})