const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinZkNsQ0a = await FreakCoin.new({from: accounts[1]});
		const uintxskZht5 = BigInt("1262")
		const addressnd2SGak = accounts[3]
		const addressovpwAyr = accounts[5]
		const addressancS2C = accounts[4]
		const addressSdN5tIp = accounts[2]
		const addressnAVsoG8 = accounts[1]
		const uintHjHgloT = BigInt("1750")
		const addresszeOWRD = "0x0000000000000000000000000000000000000001"
		const boolfPuQOU = await FreakCoinZkNsQ0a.approve.call(addressnd2SGak, uintxskZht5, {from: accounts[5]});
		const uint256Wr9n1A1 = await FreakCoinZkNsQ0a.allowance.call(addressancS2C, addressovpwAyr, {from: accounts[4]});
		const uint256HQemBaW = await FreakCoinZkNsQ0a.allowance.call(addressnAVsoG8, addressSdN5tIp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY1QpT95 = await FreakCoinZkNsQ0a.transfer.call(addresszeOWRD, uintHjHgloT, {from: accounts[0]});

		assert.equal(boolfPuQOU, true)
		assert.equal(uint256HQemBaW, BigInt("0"))
		assert.equal(uint256Wr9n1A1, BigInt("0"))
		await expect(FreakCoinZkNsQ0a.transfer.call(addresszeOWRD, uintHjHgloT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQGMEi2r = await FreakCoin.new({from: accounts[5]});
		const uintoIuBlB8 = BigInt("1910")
		const addressuHa9W1j = accounts[0]
		const uintXTTcQb9 = BigInt("1994")
		const addressuvv07Y = accounts[0]
		const addresskZChDNl = accounts[1]
		const addresst4ZJXAv = accounts[1]
		const addresszl0Dyz0 = accounts[3]
		const uintQ2FZxhq = BigInt("1284")
		const addressBQ5jXUz = accounts[4]
		const uinthNquDbg = BigInt("183")
		const addressL1zcJak = accounts[2]
		const boolu8QFbn = await FreakCoinQGMEi2r.approve.call(addressuHa9W1j, uintoIuBlB8, {from: accounts[2]});
		const boolT3FCZLW = await FreakCoinQGMEi2r.approve.call(addressuvv07Y, uintXTTcQb9, {from: accounts[1]});
		const uint256bXTuvQe = await FreakCoinQGMEi2r.allowance.call(addresst4ZJXAv, addresskZChDNl, {from: accounts[2]});
//		const uint256PYWtGoD = await FreakCoinQGMEi2r.allUserBalances.call(addresszl0Dyz0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDMfdWCd = await FreakCoinQGMEi2r.transfer.call(addressBQ5jXUz, uintQ2FZxhq, {from: accounts[4]});
//		const boolaKrf7jj = await FreakCoinQGMEi2r.transfer.call(addressL1zcJak, uinthNquDbg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolT3FCZLW, true)
		assert.equal(boolu8QFbn, true)
		assert.equal(uint256bXTuvQe, BigInt("0"))
		await expect(FreakCoinQGMEi2r.allUserBalances.call(addresszl0Dyz0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfrfEnwx = await FreakCoin.new({from: accounts[0]});
		const uintqkiJFoN = BigInt("1713")
		const addressjgIhB6I = accounts[3]
		const addressh8VxDaN = accounts[1]
		const addressGb0HmdK = accounts[5]
		const addressmVlqx4Y = accounts[3]
		const boolY12EmAm = await FreakCoinfrfEnwx.approve.call(addressjgIhB6I, uintqkiJFoN, {from: accounts[3]});
		const addressiFBAJ4w = await FreakCoinfrfEnwx.uniswapAddress.call({from: accounts[4]});
//		const addressvDXSc8a = await FreakCoinfrfEnwx.setUniswapAddress.call(addressh8VxDaN, {from: accounts[5]});
//		const addressp466Woo = await FreakCoinfrfEnwx.uniswapAddress.call({from: accounts[2]});
//		const uint256JoyYTtd = await FreakCoinfrfEnwx.allowance.call(addressmVlqx4Y, addressGb0HmdK, {from: accounts[4]});

		assert.equal(addressiFBAJ4w, 0x0000000000000000000000000000000000000000)
		assert.equal(boolY12EmAm, true)
		await expect(FreakCoinfrfEnwx.setUniswapAddress.call(addressh8VxDaN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKkr9tzO = await FreakCoin.new({from: accounts[0]});
		const uintEmiC5lg = BigInt("961")
		const addressVlZxxdR = accounts[0]
		const addresskCpdYXp = accounts[4]
		const uintlupnWNH = BigInt("1420")
		const addressuluZI6 = accounts[1]
		const addressVXJaXgh = accounts[4]
		const addressNlRpNar = accounts[2]
		const addressWjXTnq = accounts[0]
		const addressZvtz6c8 = accounts[0]
//		const booleVkDGWE = await FreakCoinKkr9tzO.transferFrom.call(addresskCpdYXp, addressVlZxxdR, uintEmiC5lg, {from: accounts[2]});
//		const booliNdXUs = await FreakCoinKkr9tzO.transferFrom.call(addressVXJaXgh, addressuluZI6, uintlupnWNH, {from: accounts[3]});
//		const uint256Y6XEAT2 = await FreakCoinKkr9tzO.balanceOf.call(addressNlRpNar, {from: accounts[1]});
//		const uint256fGyhZgT = await FreakCoinKkr9tzO.allowance.call(addressZvtz6c8, addressWjXTnq, {from: accounts[3]});

		await expect(FreakCoinKkr9tzO.transferFrom.call(addresskCpdYXp, addressVlZxxdR, uintEmiC5lg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinTx7JWyt = await FreakCoin.new({from: accounts[0]});
		const uintdjVCKKA = BigInt("1475")
		const addressnADyj7O = accounts[1]
		const uintKq0j70y = BigInt("947")
		const addressaNA6KRn = accounts[3]
		const addressaXOdaMI = accounts[0]
		const boolQGoeHvU = await FreakCoinTx7JWyt.approve.call(addressnADyj7O, uintdjVCKKA, {from: "0x0000000000000000000000000000000000000001"});
		const addressE3gLrSX = await FreakCoinTx7JWyt.uniswapAddress.call({from: accounts[2]});
		const boolo3WlLRV = await FreakCoinTx7JWyt.transfer.call(addressaNA6KRn, uintKq0j70y, {from: accounts[0]});
		const uint256u9lSsJ1 = await FreakCoinTx7JWyt.allUserBalances.call(addressaXOdaMI, {from: accounts[3]});

		assert.equal(addressE3gLrSX, 0x0000000000000000000000000000000000000000)
		assert.equal(boolQGoeHvU, true)
		assert.equal(boolo3WlLRV, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinuzb7XZd = await FreakCoin.new({from: accounts[0]});
		const addresskvJoRi = accounts[0]
		const addressmg7ZKoa = accounts[5]
		const uintxt2puIr = BigInt("1885")
		const addresslqr0lIH = accounts[0]
		const uint256GSBfhJz = await FreakCoinuzb7XZd.allowance.call(addressmg7ZKoa, addresskvJoRi, {from: accounts[3]});
		const boolH6jxwYJ = await FreakCoinuzb7XZd.transfer.call(addresslqr0lIH, uintxt2puIr, {from: accounts[0]});

		assert.equal(boolH6jxwYJ, true)
		assert.equal(uint256GSBfhJz, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDKBOGm = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKMSyAb = accounts[3]
		const addressY1ew6N = accounts[3]
		const uintLIKbEJR = BigInt("907")
		const addressYgB7RtX = accounts[1]
		const addressvcphUez = accounts[1]
		const addressw13T91F = accounts[5]
		const uint256uoTLkiD = await FreakCoinDKBOGm.allUserBalances.call(addressKMSyAb, {from: accounts[3]});
		const addressEZeL5Jd = await FreakCoinDKBOGm.uniswapAddress.call({from: accounts[2]});
		const uint256VhTZwxZ = await FreakCoinDKBOGm.allUserBalances.call(addressY1ew6N, {from: accounts[2]});
		const booltvAbmy5 = await FreakCoinDKBOGm.transferFrom.call(addressvcphUez, addressYgB7RtX, uintLIKbEJR, {from: accounts[1]});
		const uint256e4kP34 = await FreakCoinDKBOGm.allUserBalances.call(addressw13T91F, {from: accounts[4]});
	});
})