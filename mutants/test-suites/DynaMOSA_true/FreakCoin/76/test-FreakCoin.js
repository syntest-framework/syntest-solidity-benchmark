const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinVaKIuh7 = await FreakCoin.new({from: accounts[5]});
		const uintILka9mB = BigInt("832")
		const addressX39x5x1 = accounts[0]
		const addressRLTGuQg = accounts[2]
		const boolR3J1qXC = await FreakCoinVaKIuh7.approve.call(addressX39x5x1, uintILka9mB, {from: accounts[2]});
		const addressjnj4FL = await FreakCoinVaKIuh7.uniswapAddress.call({from: accounts[5]});
//		const uint256k3FrhYT = await FreakCoinVaKIuh7.allUserBalances.call(addressRLTGuQg, {from: accounts[3]});

		assert.equal(addressjnj4FL, 0x0000000000000000000000000000000000000000)
		assert.equal(boolR3J1qXC, true)
		await expect(FreakCoinVaKIuh7.allUserBalances.call(addressRLTGuQg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoins6rNham = await FreakCoin.new({from: accounts[4]});
		const addresstaXHL1 = accounts[0]
		const addressMDbOBhJ = accounts[3]
		const addressjclP8Yr = "0x0000000000000000000000000000000000000001"
		const addressHFiQYMp = accounts[0]
		const uint256z0GyeSg = await FreakCoins6rNham.allowance.call(addressMDbOBhJ, addresstaXHL1, {from: accounts[0]});
		const addressFakFyAG = await FreakCoins6rNham.uniswapAddress.call({from: accounts[1]});
		const uint256r1p0nRu = await FreakCoins6rNham.allowance.call(addressHFiQYMp, addressjclP8Yr, {from: accounts[2]});

		assert.equal(addressFakFyAG, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256r1p0nRu, BigInt("0"))
		assert.equal(uint256z0GyeSg, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinq9l5BnP = await FreakCoin.new({from: accounts[2]});
		const uintI4lE7UG = BigInt("256")
		const addressFto0chL = accounts[5]
		const addresshjL77kO = accounts[1]
		const addressJznM9Zw = accounts[4]
		const addressIXlr1zB = accounts[1]
		const addressdoKzqfQ = accounts[0]
//		const boolAMFJe0w = await FreakCoinq9l5BnP.transferFrom.call(addresshjL77kO, addressFto0chL, uintI4lE7UG, {from: accounts[5]});
//		const uint256JQ2NOWD = await FreakCoinq9l5BnP.allowance.call(addressIXlr1zB, addressJznM9Zw, {from: accounts[3]});
//		const uint256IQjyPD7 = await FreakCoinq9l5BnP.totalSupply.call({from: accounts[1]});
//		const addresspXrTYhW = await FreakCoinq9l5BnP.setUniswapAddress.call(addressdoKzqfQ, {from: accounts[5]});
//		const uint256ksuSmLq = await FreakCoinq9l5BnP.totalSupply.call({from: accounts[1]});

		await expect(FreakCoinq9l5BnP.transferFrom.call(addresshjL77kO, addressFto0chL, uintI4lE7UG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinD2kM1Gv = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshK0RoIr = accounts[0]
		const addressv33CD0 = accounts[4]
		const addressLfjfKtp = accounts[2]
		const uint256FUB57TL = await FreakCoinD2kM1Gv.balanceOf.call(addresshK0RoIr, {from: accounts[4]});
		const addressp8pm6jY = await FreakCoinD2kM1Gv.uniswapAddress.call({from: accounts[1]});
		const uint256SVpgNO7 = await FreakCoinD2kM1Gv.balanceOf.call(addressv33CD0, {from: accounts[4]});
		const uint256Dt9qEpm = await FreakCoinD2kM1Gv.balanceOf.call(addressLfjfKtp, {from: accounts[0]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJe1Fqj = await FreakCoin.new({from: accounts[4]});
		const addressPdJ2agX = accounts[4]
		const addressRUwPN9I = accounts[2]
		const uintM8VjD8d = BigInt("949")
		const addressBdhsCDD = accounts[0]
		const addressPmLDtY2 = accounts[3]
		const uint9Skpdj = BigInt("493")
		const addresssYQsuQ9 = accounts[1]
		const addressD7MVMKt = accounts[3]
		const uint256gQWL2xx = await FreakCoinJe1Fqj.allUserBalances.call(addressPdJ2agX, {from: accounts[0]});
		const uint256TfessgS = await FreakCoinJe1Fqj.balanceOf.call(addressRUwPN9I, {from: accounts[5]});
		const boolzWWbJ87 = await FreakCoinJe1Fqj.approve.call(addressBdhsCDD, uintM8VjD8d, {from: accounts[0]});
		const addressQ9wqFC = await FreakCoinJe1Fqj.setUniswapAddress.call(addressPmLDtY2, {from: accounts[4]});
//		const boolkUuxp3q = await FreakCoinJe1Fqj.transfer.call(addresssYQsuQ9, uint9Skpdj, {from: accounts[5]});
//		const uint256qGYUzr = await FreakCoinJe1Fqj.allUserBalances.call(addressD7MVMKt, {from: accounts[0]});

		assert.equal(boolzWWbJ87, true)
		assert.equal(uint256TfessgS, BigInt("0"))
		await expect(FreakCoinJe1Fqj.transfer.call(addresssYQsuQ9, uint9Skpdj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJe1Fqj = await FreakCoin.new({from: accounts[4]});
		const addressTdrNgIB = accounts[4]
		const addressig3WSQx = accounts[2]
		const addressQb2kzRk = accounts[4]
		const uintcQKDxJK = BigInt("511")
		const addressvqHW2B = "0x0000000000000000000000000000000000000001"
		const addressEuula99 = accounts[3]
		const uint256gQWL2xx = await FreakCoinJe1Fqj.allUserBalances.call(addressTdrNgIB, {from: accounts[0]});
		const uint256TfessgS = await FreakCoinJe1Fqj.balanceOf.call(addressig3WSQx, {from: accounts[5]});
		const addressQ9wqFC = await FreakCoinJe1Fqj.setUniswapAddress.call(addressQb2kzRk, {from: accounts[4]});
		const boolh9rxkEw = await FreakCoinJe1Fqj.transfer.call(addressvqHW2B, uintcQKDxJK, {from: accounts[4]});
//		const uint256qGYUzr = await FreakCoinJe1Fqj.allUserBalances.call(addressEuula99, {from: accounts[0]});

		assert.equal(boolh9rxkEw, true)
		assert.equal(uint256TfessgS, BigInt("0"))
		await expect(FreakCoinJe1Fqj.allUserBalances.call(addressEuula99, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJe1Fqj = await FreakCoin.new({from: accounts[4]});
		const addressJkm67Hq = accounts[4]
		const uintiskoi3C = BigInt("511")
		const addressfPVjqSk = accounts[3]
		const uintgi8A8Hd = BigInt("855")
		const addressz9gRGF = accounts[4]
		const addresstrM3PS6 = accounts[3]
		const uintgkSh3kw = BigInt("606")
		const addressw7PI3wq = accounts[4]
		const uint256gQWL2xx = await FreakCoinJe1Fqj.allUserBalances.call(addressJkm67Hq, {from: accounts[0]});
		const boolh9rxkEw = await FreakCoinJe1Fqj.transfer.call(addressfPVjqSk, uintiskoi3C, {from: accounts[4]});
		const booli8c5jwA = await FreakCoinJe1Fqj.transfer.call(addressz9gRGF, uintgi8A8Hd, {from: accounts[4]});
//		const uint256qGYUzr = await FreakCoinJe1Fqj.allUserBalances.call(addresstrM3PS6, {from: accounts[0]});
//		const boolfOLkb5C = await FreakCoinJe1Fqj.approve.call(addressw7PI3wq, uintgkSh3kw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolh9rxkEw, true)
		assert.equal(booli8c5jwA, true)
		await expect(FreakCoinJe1Fqj.allUserBalances.call(addresstrM3PS6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})