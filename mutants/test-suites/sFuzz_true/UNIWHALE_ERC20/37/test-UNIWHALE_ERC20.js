const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hNLD9qz = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintIVsvgJt = BigInt("1777")
		const uintoJ9wER = BigInt("269")
		const uintGQEHO6y = BigInt("1721")
		const uintaHFe6cN = BigInt("1519")
		const addressC8mrVWQ = accounts[0]
		const uint256TSDRT91 = await UNIWHALE_ERC20hNLD9qz.startAirdrop.call(uintaHFe6cN, uintGQEHO6y, uintoJ9wER, uintIVsvgJt, {from: accounts[2]});
//		const boolpCPA1H = await UNIWHALE_ERC20hNLD9qz.tokenSale.call(addressC8mrVWQ, {from: accounts[2]});
//		const uint256lqHQ7pI = await UNIWHALE_ERC20hNLD9qz.viewAirdrop.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20hNLD9qz.tokenSale.call(addressC8mrVWQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20y0ArIqY = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressIn93ylB = accounts[0]
		const uint256KbEks3F = await UNIWHALE_ERC20y0ArIqY.viewAirdrop.call({from: accounts[5]});
		const uint256YkCxIm5 = await UNIWHALE_ERC20y0ArIqY.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kTlHeyn = await UNIWHALE_ERC20y0ArIqY.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolw60BzJi = await UNIWHALE_ERC20y0ArIqY.tokenSale.call(addressIn93ylB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20y0ArIqY.tokenSale.call(addressIn93ylB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20uGgZzFQ = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintscELF4X = BigInt("1579")
		const uintBboBKz = BigInt("1740")
		const uintU6tYOh = BigInt("76")
		const uintEQNezB4 = BigInt("1701")
		const uintvhe4Xc = BigInt("534")
		const uinth6B1wmF = BigInt("866")
		const uintA1AsbRO = BigInt("834")
		const uintdSBwh1g = BigInt("1861")
		const uintgWaX7vL = BigInt("260")
		const uint256FNEQ3d5 = await UNIWHALE_ERC20uGgZzFQ.viewSale.call({from: accounts[0]});
		const uint256oCKC8tx = await UNIWHALE_ERC20uGgZzFQ.viewAirdrop.call({from: accounts[4]});
//		const uint256x3V0Jk6 = await UNIWHALE_ERC20uGgZzFQ.startSale.call(uintvhe4Xc, uintEQNezB4, uintU6tYOh, uintBboBKz, uintscELF4X, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hUqUN7K = await UNIWHALE_ERC20uGgZzFQ.startAirdrop.call(uintgWaX7vL, uintdSBwh1g, uintA1AsbRO, uinth6B1wmF, {from: accounts[2]});

		await expect(UNIWHALE_ERC20uGgZzFQ.startSale.call(uintvhe4Xc, uintEQNezB4, uintU6tYOh, uintBboBKz, uintscELF4X, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20DkyHc9h = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTYKXlY8 = accounts[0]
		const uintwVWUodk = BigInt("1920")
		const uintVk41YP9 = BigInt("1599")
		const uintN4Fix3e = BigInt("678")
		const uinteC9zbaK = BigInt("45")
		const uintRHp06j = BigInt("1652")
		const uintqfm4bI1 = BigInt("866")
		const uintPu4jIh = BigInt("380")
		const uintB9WMag2 = BigInt("1958")
		const uintiK40ieL = BigInt("859")
		const uintHFtTnbj = BigInt("1901")
		const bool5BD8xF = await UNIWHALE_ERC20DkyHc9h.tokenSale.call(addressTYKXlY8, {from: accounts[2]});
		const uint256hHKFk7I = await UNIWHALE_ERC20DkyHc9h.startSale.call(uintRHp06j, uinteC9zbaK, uintN4Fix3e, uintVk41YP9, uintwVWUodk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CsyXNN4 = await UNIWHALE_ERC20DkyHc9h.viewSale.call({from: accounts[5]});
		const uint256AYJWgJa = await UNIWHALE_ERC20DkyHc9h.startSale.call(uintHFtTnbj, uintiK40ieL, uintB9WMag2, uintPu4jIh, uintqfm4bI1, {from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e04ztFl = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressSlgiOkW = accounts[0]
		const addressvjCqkka = accounts[0]
		const uint2567Lrw1o = await UNIWHALE_ERC20e04ztFl.viewAirdrop.call({from: accounts[2]});
//		const boolmZE0f5 = await UNIWHALE_ERC20e04ztFl.getAirdrop.call(addressSlgiOkW, {from: accounts[1]});
//		const boolhqr5uIs = await UNIWHALE_ERC20e04ztFl.getAirdrop.call(addressvjCqkka, {from: accounts[3]});

		await expect(UNIWHALE_ERC20e04ztFl.getAirdrop.call(addressSlgiOkW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e04ztFl = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintfb9Rdpj = BigInt("120")
		const uint6wbLKi = BigInt("458")
		const uintf7TrlKt = BigInt("127")
		const uintJAkrWUW = BigInt("742")
		const uint256ahqvEY2 = await UNIWHALE_ERC20e04ztFl.startAirdrop.call(uintJAkrWUW, uintf7TrlKt, uint6wbLKi, uintfb9Rdpj, {from: accounts[0]});
		const uint256uHO1fsc = await UNIWHALE_ERC20e04ztFl.viewSale.call({from: accounts[3]});
//		await UNIWHALE_ERC20e04ztFl.clearETH.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20e04ztFl.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e04ztFl = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintAQOQ6ev = BigInt("1622")
		const uintZ0WxzK2 = BigInt("1779")
		const uintmwCk0Vg = BigInt("343")
		const uintd4OveL4 = BigInt("363")
		const uintIGjNR4 = BigInt("1990")
		const uint256UkF1Kfa = await UNIWHALE_ERC20e04ztFl.startSale.call(uintIGjNR4, uintd4OveL4, uintmwCk0Vg, uintZ0WxzK2, uintAQOQ6ev, {from: accounts[0]});
		const uint256DuZX8v9 = await UNIWHALE_ERC20e04ztFl.viewAirdrop.call({from: accounts[1]});
		const uint256uHO1fsc = await UNIWHALE_ERC20e04ztFl.viewSale.call({from: accounts[3]});
	});
})