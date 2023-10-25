const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoind6PdqhD = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNQ7rgQ = accounts[2]
		const addressMU3SfQ1 = accounts[2]
		const addressZ9R5Ccw = accounts[2]
		const uint256PvsPU9 = await FreakCoind6PdqhD.allUserBalances.call(addressNQ7rgQ, {from: accounts[0]});
		const uint256qOW27og = await FreakCoind6PdqhD.balanceOf.call(addressMU3SfQ1, {from: accounts[2]});
		const uint256znYhvpN = await FreakCoind6PdqhD.balanceOf.call(addressZ9R5Ccw, {from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinHaZKGYI = await FreakCoin.new({from: accounts[0]});
		const addressfEYBSr6 = accounts[4]
		const uint07orKR = BigInt("701")
		const addressI6h5S2m = accounts[4]
		const addresseuFZera = "0x0000000000000000000000000000000000000001"
		const uintWWjb8g = BigInt("635")
		const addressEohhct3 = "0x0000000000000000000000000000000000000001"
		const uintRoptU7j = BigInt("1156")
		const addressONzw8gn = accounts[4]
		const addressY7LJj8G = await FreakCoinHaZKGYI.uniswapAddress.call({from: accounts[4]});
		const uint256rm7ZVh8 = await FreakCoinHaZKGYI.balanceOf.call(addressfEYBSr6, {from: accounts[1]});
		const boolK4O3jWf = await FreakCoinHaZKGYI.transferFrom.call(addresseuFZera, addressI6h5S2m, uint07orKR, {from: accounts[3]});
		const boolgpPcmD5 = await FreakCoinHaZKGYI.approve.call(addressEohhct3, uintWWjb8g, {from: accounts[0]});
		const boolO3ataUw = await FreakCoinHaZKGYI.transfer.call(addressONzw8gn, uintRoptU7j, {from: accounts[4]});
		const addresseC0rmBL = await FreakCoinHaZKGYI.uniswapAddress.call({from: accounts[4]});

		assert.equal(addressY7LJj8G, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256rm7ZVh8, BigInt("0"))
		await expect(FreakCoinHaZKGYI.transferFrom.call(addresseuFZera, addressI6h5S2m, uint07orKR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinrR6OX27 = await FreakCoin.new({from: accounts[4]});
		const addressSxhwadv = accounts[3]
		const addressfm5ZOMp = "0x0000000000000000000000000000000000000001"
		const uintvRTnRsJ = BigInt("1465")
		const addressFusmgQO = accounts[1]
		const uint256NWRTToq = await FreakCoinrR6OX27.allowance.call(addressfm5ZOMp, addressSxhwadv, {from: accounts[0]});
		const boolZ3sKAe7 = await FreakCoinrR6OX27.transfer.call(addressFusmgQO, uintvRTnRsJ, {from: accounts[2]});

		assert.equal(uint256NWRTToq, BigInt("0"))
		await expect(FreakCoinrR6OX27.transfer.call(addressFusmgQO, uintvRTnRsJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinsVIDO4l = await FreakCoin.new({from: accounts[1]});
		const uintb3gqb1v = BigInt("93")
		const addresslUfJUtV = "0x0000000000000000000000000000000000000001"
		const uintRGhiboz = BigInt("1333")
		const addressR2TKszS = accounts[2]
		const uintHO0AgP = BigInt("1706")
		const addressND6WOPW = accounts[5]
		const addressnkyKTYq = await FreakCoinsVIDO4l.uniswapAddress.call({from: accounts[1]});
		const boolpe4t8RR = await FreakCoinsVIDO4l.approve.call(addresslUfJUtV, uintb3gqb1v, {from: accounts[1]});
		const boolWkXtfxg = await FreakCoinsVIDO4l.transfer.call(addressR2TKszS, uintRGhiboz, {from: accounts[3]});
		const boollHbthdu = await FreakCoinsVIDO4l.transfer.call(addressND6WOPW, uintHO0AgP, {from: accounts[4]});

		assert.equal(addressnkyKTYq, 0x0000000000000000000000000000000000000000)
		assert.equal(boolpe4t8RR, true)
		await expect(FreakCoinsVIDO4l.transfer.call(addressR2TKszS, uintRGhiboz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinuQVfb6R = await FreakCoin.new({from: accounts[4]});
		const addressiTuPAO9 = accounts[3]
		const addressSX7GCVF = "0x0000000000000000000000000000000000000001"
		const addressnHzhozd = accounts[5]
		const uint256NRJD1K6 = await FreakCoinuQVfb6R.allowance.call(addressSX7GCVF, addressiTuPAO9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FaZrtA = await FreakCoinuQVfb6R.allUserBalances.call(addressnHzhozd, {from: accounts[0]});

		assert.equal(uint256NRJD1K6, BigInt("0"))
		await expect(FreakCoinuQVfb6R.allUserBalances.call(addressnHzhozd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinaQMnx9J = await FreakCoin.new({from: accounts[1]});
		const uintRJqFht = BigInt("127")
		const addressMT1IpEO = accounts[0]
		const uintG4eqvtz = BigInt("831")
		const addressVH4W7jc = accounts[1]
		const addresswKcpcFw = accounts[1]
		const boolAMBYE45 = await FreakCoinaQMnx9J.transfer.call(addressMT1IpEO, uintRJqFht, {from: accounts[1]});
		const boolnSPXoes = await FreakCoinaQMnx9J.transfer.call(addressVH4W7jc, uintG4eqvtz, {from: accounts[0]});
		const uint256GxFNYBd = await FreakCoinaQMnx9J.allUserBalances.call(addresswKcpcFw, {from: accounts[2]});

		assert.equal(boolAMBYE45, true)
		await expect(FreakCoinaQMnx9J.transfer.call(addressVH4W7jc, uintG4eqvtz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinaQMnx9J = await FreakCoin.new({from: accounts[1]});
		const uinteGdF13s = BigInt("127")
		const addressQixPphJ = accounts[1]
		const uintNc5oDh4 = BigInt("831")
		const addressq1RzcpC = accounts[1]
		const addresse9IoqGM = accounts[1]
		const boolAMBYE45 = await FreakCoinaQMnx9J.transfer.call(addressQixPphJ, uinteGdF13s, {from: accounts[1]});
		const boolnSPXoes = await FreakCoinaQMnx9J.transfer.call(addressq1RzcpC, uintNc5oDh4, {from: accounts[0]});
		const uint256GxFNYBd = await FreakCoinaQMnx9J.allUserBalances.call(addresse9IoqGM, {from: accounts[2]});

		assert.equal(boolAMBYE45, true)
		await expect(FreakCoinaQMnx9J.transfer.call(addressq1RzcpC, uintNc5oDh4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxmt4Mem = await FreakCoin.new({from: accounts[3]});
		const addressvSqUV6L = accounts[5]
		const addressTTUhTkY = accounts[3]
		const addressIPCCS2J = await FreakCoinxmt4Mem.setUniswapAddress.call(addressvSqUV6L, {from: accounts[4]});
		const addressAk8PULR = await FreakCoinxmt4Mem.uniswapAddress.call({from: accounts[0]});
		const uint256B0HBSxK = await FreakCoinxmt4Mem.allUserBalances.call(addressTTUhTkY, {from: accounts[2]});

		await expect(FreakCoinxmt4Mem.setUniswapAddress.call(addressvSqUV6L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})