const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIBSWa7d = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressAzLLDV7 = accounts[4]
		const addressI8ruOEL = accounts[4]
		const addressDdGEDA = "0x0000000000000000000000000000000000000001"
		const uintJCvRE2H = await CryptoSecureBankTokenIBSWa7d.allowance.call(addressI8ruOEL, addressAzLLDV7, {from: accounts[3]});
		const addressgsgS7Wg = await CryptoSecureBankTokenIBSWa7d.setOwner2.call(addressDdGEDA, {from: accounts[3]});
		await CryptoSecureBankTokenIBSWa7d.whenNotPaused.call({from: accounts[3]});

		assert.equal(uintJCvRE2H, BigInt("0"))
		await expect(CryptoSecureBankTokenIBSWa7d.setOwner2.call(addressDdGEDA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZkB1ZFh = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressY7MEPTt = "0x0000000000000000000000000000000000000001"
		const addressyONl1s8 = await CryptoSecureBankTokenZkB1ZFh.getOwner.call({from: accounts[0]});
		const boolT62LPu5 = await CryptoSecureBankTokenZkB1ZFh.deprecate.call(addressY7MEPTt, {from: accounts[3]});

		assert.equal(addressyONl1s8, 0xF7677fB5939740f7372518869cAf78AC070425dc)
		assert.equal(boolT62LPu5, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbasZBGf = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintdqt0R3 = BigInt("2027")
		const addresspMn4Kr1 = accounts[0]
		const uintyELFJvP = BigInt("114")
		const addressbAnaIW0 = accounts[4]
		const addressZqzxI4T = accounts[1]
		const uintQjUs6vj = BigInt("941")
		const addressRI11P1s = accounts[0]
		const addressoaiJ03q = accounts[3]
		const addressN0esCaF = accounts[5]
		const booly4tYARK = await CryptoSecureBankTokenbasZBGf.transfer.call(addresspMn4Kr1, uintdqt0R3, {from: accounts[4]});
		const booliYLfiqA = await CryptoSecureBankTokenbasZBGf.approve.call(addressbAnaIW0, uintyELFJvP, {from: accounts[4]});
		const addressqqKxjZ = await CryptoSecureBankTokenbasZBGf.transferOwnership.call(addressZqzxI4T, {from: accounts[3]});
		const boolNwT0FS0 = await CryptoSecureBankTokenbasZBGf.transfer.call(addressRI11P1s, uintQjUs6vj, {from: accounts[3]});
		const uintZZMkJBd = await CryptoSecureBankTokenbasZBGf.allowance.call(addressN0esCaF, addressoaiJ03q, {from: accounts[3]});

		await expect(CryptoSecureBankTokenbasZBGf.transfer.call(addresspMn4Kr1, uintdqt0R3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenx7o6xww = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintkvv6Cp = BigInt("869")
		const addressM2Yy6bE = accounts[2]
		const addressd9Jk8al = accounts[4]
		const addressPgsYkaU = await CryptoSecureBankTokenx7o6xww.getOwner.call({from: accounts[3]});
		const boolIylJVJx = await CryptoSecureBankTokenx7o6xww.approve.call(addressM2Yy6bE, uintkvv6Cp, {from: accounts[2]});
		const addressGf3vU73 = await CryptoSecureBankTokenx7o6xww.removeBlackList.call(addressd9Jk8al, {from: accounts[3]});
		const addressUjrWZXQ = await CryptoSecureBankTokenx7o6xww.getOwner.call({from: accounts[4]});
		await CryptoSecureBankTokenx7o6xww.whenNotPaused.call({from: accounts[4]});

		assert.equal(addressPgsYkaU, 0x29090D0c80718d9F52C92631d60B2f2Ef7A78b39)
		assert.equal(boolIylJVJx, true)
		await expect(CryptoSecureBankTokenx7o6xww.removeBlackList.call(addressd9Jk8al, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokena2YjIP = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteCvmCJF = BigInt("2004")
		const addressJR3Rs6s = accounts[4]
		const addressivPKwz = accounts[2]
		const uintYRR34Vr = BigInt("1632")
		const addresseCsgEJb = accounts[4]
		const addressNiXJBi6 = accounts[0]
		await CryptoSecureBankTokena2YjIP.pause.call({from: accounts[4]});
		const boolUqd4zn5 = await CryptoSecureBankTokena2YjIP.approve.call(addressJR3Rs6s, uinteCvmCJF, {from: accounts[4]});
		const boolGKc6WSJ = await CryptoSecureBankTokena2YjIP.getBlackListStatus.call(addressivPKwz, {from: accounts[5]});
		const boolb9SWqe2 = await CryptoSecureBankTokena2YjIP.redeem.call(uintYRR34Vr, {from: accounts[1]});
		const addressnNhxYZ4 = await CryptoSecureBankTokena2YjIP.destroyBlackFunds.call(addresseCsgEJb, {from: accounts[0]});
		const uintNBXmvD = await CryptoSecureBankTokena2YjIP.balanceOf.call(addressNiXJBi6, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuhIYCPY = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressy60ZUFt = accounts[2]
		const addressF3hF2jM = accounts[1]
		const addressv3Mbes7 = accounts[1]
		const uintY9GjnzJ = BigInt("426")
		const addressClPwQRz = accounts[0]
		const addressxwkXf7K = accounts[2]
		const uintuNjEF7b = await CryptoSecureBankTokenuhIYCPY.allowance.call(addressF3hF2jM, addressy60ZUFt, {from: accounts[2]});
		const addressAign68E = await CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressv3Mbes7, {from: accounts[0]});
		const boolGZm4KQm = await CryptoSecureBankTokenuhIYCPY.transferFrom.call(addressxwkXf7K, addressClPwQRz, uintY9GjnzJ, {from: accounts[2]});

		assert.equal(uintuNjEF7b, BigInt("0"))
		await expect(CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressv3Mbes7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbnCdOuE = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressLKX3L0G = accounts[0]
		const addressWsqvWB2 = accounts[0]
		const addressUw0EtCF = accounts[0]
		const address5sVqrb = accounts[1]
		const uinttCjixAZ = await CryptoSecureBankTokenbnCdOuE.balanceOf.call(addressLKX3L0G, {from: accounts[4]});
		const uintMEvNAy = await CryptoSecureBankTokenbnCdOuE.allowance.call(addressUw0EtCF, addressWsqvWB2, {from: accounts[0]});
		await CryptoSecureBankTokenbnCdOuE.onlyOwner.call({from: accounts[2]});
		await CryptoSecureBankTokenbnCdOuE.whenPaused.call({from: accounts[0]});
		const address4xGdP4 = await CryptoSecureBankTokenbnCdOuE.setOwner2.call(address5sVqrb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintMEvNAy, BigInt("0"))
		assert.equal(uinttCjixAZ, BigInt("0"))
		await expect(CryptoSecureBankTokenbnCdOuE.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenx7o6xww = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressKx3UVRO = accounts[4]
		const addressPgsYkaU = await CryptoSecureBankTokenx7o6xww.getOwner.call({from: accounts[3]});
		await CryptoSecureBankTokenx7o6xww.pause.call({from: accounts[1]});
		const addressGf3vU73 = await CryptoSecureBankTokenx7o6xww.removeBlackList.call(addressKx3UVRO, {from: accounts[3]});
		const addressUjrWZXQ = await CryptoSecureBankTokenx7o6xww.getOwner.call({from: accounts[4]});
		await CryptoSecureBankTokenx7o6xww.whenNotPaused.call({from: accounts[4]});

		assert.equal(addressPgsYkaU, 0x29090D0c80718d9F52C92631d60B2f2Ef7A78b39)
		await expect(CryptoSecureBankTokenx7o6xww.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuhIYCPY = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresse5ik5R = accounts[2]
		const addressZynThax = accounts[2]
		const uintKpqqRGo = BigInt("172")
		const addresss41ZLX3 = accounts[5]
		const addressTdgWjpN = accounts[1]
		const uintpeQ5jM9 = BigInt("426")
		const addressxBs6Eii = accounts[0]
		const addressnres8m6 = accounts[2]
		const addressvFdehlt = accounts[2]
		const uintuNjEF7b = await CryptoSecureBankTokenuhIYCPY.allowance.call(addressZynThax, addresse5ik5R, {from: accounts[2]});
		const boolLyBWcsz = await CryptoSecureBankTokenuhIYCPY.transfer.call(addresss41ZLX3, uintKpqqRGo, {from: accounts[3]});
		const addressAign68E = await CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressTdgWjpN, {from: accounts[0]});
		const boolGZm4KQm = await CryptoSecureBankTokenuhIYCPY.transferFrom.call(addressnres8m6, addressxBs6Eii, uintpeQ5jM9, {from: accounts[2]});
		const addresswneL1T4 = await CryptoSecureBankTokenuhIYCPY.destroyBlackFunds.call(addressvFdehlt, {from: accounts[1]});

		assert.equal(boolLyBWcsz, true)
		assert.equal(uintuNjEF7b, BigInt("0"))
		await expect(CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressTdgWjpN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbyCNisW = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressNycsWsD = accounts[3]
		const addresslR5VtsA = accounts[0]
		const uintcR8QG0 = BigInt("1108")
		const addressFoJzYG = accounts[1]
		const addresszBmvlYe = accounts[0]
		const uintKJmAPUl = BigInt("162")
		const addressoWOqj4e = accounts[2]
		const uintdpTbKbU = BigInt("1290")
		const addressQQk52lT = accounts[3]
		const uintTJzdFVc = await CryptoSecureBankTokenbyCNisW.allowance.call(addresslR5VtsA, addressNycsWsD, {from: accounts[0]});
		const boolJ4hD9SK = await CryptoSecureBankTokenbyCNisW.transferFrom.call(addresszBmvlYe, addressFoJzYG, uintcR8QG0, {from: "0x0000000000000000000000000000000000000001"});
		const boolt8R4QnX = await CryptoSecureBankTokenbyCNisW.transfer.call(addressoWOqj4e, uintKJmAPUl, {from: accounts[2]});
		const uintD9VUe8Z = await CryptoSecureBankTokenbyCNisW.onlyPayloadSize.call(uintdpTbKbU, {from: accounts[4]});
		const addressd5miGya = await CryptoSecureBankTokenbyCNisW.addBlackList.call(addressQQk52lT, {from: accounts[0]});

		assert.equal(uintTJzdFVc, BigInt("0"))
		await expect(CryptoSecureBankTokenbyCNisW.transferFrom.call(addresszBmvlYe, addressFoJzYG, uintcR8QG0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIBSWa7d = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressohexRPF = accounts[5]
		const addressTEs2MA6 = accounts[4]
		const addressV9IhsvG = "0x0000000000000000000000000000000000000001"
		const uintJCvRE2H = await CryptoSecureBankTokenIBSWa7d.allowance.call(addressTEs2MA6, addressohexRPF, {from: accounts[3]});
		const uintOvwWIDM = await CryptoSecureBankTokenIBSWa7d.totalSupply.call({from: accounts[0]});
		const addressgsgS7Wg = await CryptoSecureBankTokenIBSWa7d.setOwner2.call(addressV9IhsvG, {from: accounts[3]});
		await CryptoSecureBankTokenIBSWa7d.whenNotPaused.call({from: accounts[3]});

		assert.equal(uintJCvRE2H, BigInt("0"))
		assert.equal(uintOvwWIDM, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenIBSWa7d.setOwner2.call(addressV9IhsvG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintmpCnmKI = BigInt("1585")
		const addressDVM1qPI = accounts[0]
		const addresscOzd8M2 = accounts[2]
		const boolcV6rGQO = await CryptoSecureBankTokenMIVAA8C.approve.call(addressDVM1qPI, uintmpCnmKI, {from: accounts[3]});
		const bool1Pvjpj = await CryptoSecureBankTokenMIVAA8C.getBlackListStatus.call(addresscOzd8M2, {from: accounts[1]});

		assert.equal(bool1Pvjpj, false)
		assert.equal(boolcV6rGQO, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresskKK1zgW = accounts[1]
		const addressecdmyL = accounts[0]
		const addressAeOFHtO = "0x0000000000000000000000000000000000000001"
		const uinth9Nuuv = await CryptoSecureBankTokenMIVAA8C.balanceOf.call(addresskKK1zgW, {from: accounts[2]});
		const addressegO1Wx = await CryptoSecureBankTokenMIVAA8C.addBlackList.call(addressecdmyL, {from: accounts[4]});
		const addressV4rEWmY = await CryptoSecureBankTokenMIVAA8C.setOwner2.call(addressAeOFHtO, {from: accounts[4]});

		assert.equal(uinth9Nuuv, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressKc7Fops = accounts[0]
		const uint30po1S = BigInt("1530")
		const addressFxNWvs3 = accounts[4]
		const uintaHVARQh = BigInt("164")
		const uintVb99wx2 = BigInt("1039")
		const uinth9Nuuv = await CryptoSecureBankTokenMIVAA8C.balanceOf.call(addressKc7Fops, {from: accounts[2]});
		const boolSjOkq10 = await CryptoSecureBankTokenMIVAA8C.approve.call(addressFxNWvs3, uint30po1S, {from: accounts[4]});
		const boolflheYBc = await CryptoSecureBankTokenMIVAA8C.redeem.call(uintaHVARQh, {from: accounts[4]});
		const uinttptjnqA = await CryptoSecureBankTokenMIVAA8C.onlyPayloadSize.call(uintVb99wx2, {from: accounts[1]});

		assert.equal(boolSjOkq10, true)
		assert.equal(boolflheYBc, true)
		assert.equal(uinth9Nuuv, BigInt("0"))
		await expect(CryptoSecureBankTokenMIVAA8C.onlyPayloadSize.call(uintVb99wx2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressLQjNPmk = accounts[3]
		const addressNj15D0U = accounts[1]
		const addressZQKzmRz = await CryptoSecureBankTokenMIVAA8C.removeBlackList.call(addressLQjNPmk, {from: accounts[4]});
		const uinth9Nuuv = await CryptoSecureBankTokenMIVAA8C.balanceOf.call(addressNj15D0U, {from: accounts[2]});

		assert.equal(uinth9Nuuv, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintKDWz9aq = BigInt("58")
		const addressAIPzLyJ = accounts[0]
		const addressQDympFv = accounts[4]
		const uintUqd68SE = BigInt("797")
		const addressywTHy7B = accounts[0]
		const addressQ7YOUeL = accounts[1]
		const boolcV6rGQO = await CryptoSecureBankTokenMIVAA8C.approve.call(addressAIPzLyJ, uintKDWz9aq, {from: accounts[3]});
		const addressdnuZkY2 = await CryptoSecureBankTokenMIVAA8C.destroyBlackFunds.call(addressQDympFv, {from: accounts[4]});
		const boolmtl9kMm = await CryptoSecureBankTokenMIVAA8C.transferFrom.call(addressQ7YOUeL, addressywTHy7B, uintUqd68SE, {from: accounts[3]});

		assert.equal(boolcV6rGQO, true)
		await expect(CryptoSecureBankTokenMIVAA8C.destroyBlackFunds.call(addressQDympFv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIVAA8C = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintWhzbtHP = BigInt("328")
		const uintjomm3Kt = BigInt("1466")
		const uintrumB61o = BigInt("1993")
		const address8x0mPb = accounts[0]
		const uintePxOyOy = BigInt("797")
		const addressZdyrqTv = accounts[0]
		const addressOYbdBNm = accounts[1]
		const uintoKy2fL = await CryptoSecureBankTokenMIVAA8C.setParams.call(uintjomm3Kt, uintWhzbtHP, {from: accounts[4]});
		const boolcV6rGQO = await CryptoSecureBankTokenMIVAA8C.approve.call(address8x0mPb, uintrumB61o, {from: accounts[3]});
		const boolmtl9kMm = await CryptoSecureBankTokenMIVAA8C.transferFrom.call(addressOYbdBNm, addressZdyrqTv, uintePxOyOy, {from: accounts[3]});

		await expect(CryptoSecureBankTokenMIVAA8C.setParams.call(uintjomm3Kt, uintWhzbtHP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuhIYCPY = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressjVkDr5d = accounts[3]
		const addressOlB6SLV = "0x0000000000000000000000000000000000000001"
		const uintN6JFoRA = BigInt("242")
		const addresskW3VL6t = accounts[5]
		const address4CneZz = await CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressjVkDr5d, {from: accounts[3]});
		const boolFChdPOC = await CryptoSecureBankTokenuhIYCPY.getBlackListStatus.call(addressOlB6SLV, {from: accounts[3]});
		const boolLyBWcsz = await CryptoSecureBankTokenuhIYCPY.transfer.call(addresskW3VL6t, uintN6JFoRA, {from: accounts[3]});

		assert.equal(boolFChdPOC, false)
		assert.equal(boolLyBWcsz, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuhIYCPY = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintszSNP15 = BigInt("0")
		const addressksQDrk4 = accounts[6]
		const addressR2wkCCN = accounts[2]
		const addressQf0gSm = accounts[4]
		const addressOsHHwK = accounts[4]
		const addressfP4MW0 = accounts[0]
		const boolLyBWcsz = await CryptoSecureBankTokenuhIYCPY.transfer.call(addressksQDrk4, uintszSNP15, {from: accounts[3]});
		const addresswneL1T4 = await CryptoSecureBankTokenuhIYCPY.destroyBlackFunds.call(addressR2wkCCN, {from: accounts[1]});
		const uintB4O2gi = await CryptoSecureBankTokenuhIYCPY.allowance.call(addressOsHHwK, addressQf0gSm, {from: "0x0000000000000000000000000000000000000001"});
		const addressPbXioUs = await CryptoSecureBankTokenuhIYCPY.transferOwnership.call(addressfP4MW0, {from: accounts[5]});

		assert.equal(boolLyBWcsz, true)
		await expect(CryptoSecureBankTokenuhIYCPY.destroyBlackFunds.call(addressR2wkCCN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})