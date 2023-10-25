const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100IHcaC75 = await Token50X100.new({from: accounts[3]});
		const uintfH0oWFx = BigInt("234")
		const stringkOqtw2u = "ks2TtXzp6z0jbIjADCq1fBlA6qYLdFiLog63fCzjS9shQeG2vO3Tii13K1scahdKvMzwX6qW1tkg2dXDtSi77VQ32LXer"
		const stringzc42rE = "mlEFgR7elfnauEMhVeUgdOtnIhdpYFG8ruZC"
		const uintlzKAibj = BigInt("1330")
		const addressGZ5dY7a = accounts[3]
		const uintwayml7q = BigInt("32")
		const addressdbIqFaB = accounts[5]
		const addressSGg60ih = accounts[0]
		const uintb0iPSqJ = BigInt("554")
//		const booluNuiPCX = await Token50X100IHcaC75.setSymbolNameDecimals.call(stringzc42rE, stringkOqtw2u, uintfH0oWFx, {from: accounts[1]});
//		const uint256rF5N0T = await Token50X100IHcaC75.totalSupply.call({from: accounts[3]});
//		const boolSDuh9qB = await Token50X100IHcaC75.transfer.call(addressGZ5dY7a, uintlzKAibj, {from: accounts[1]});
//		const boolh6rCPkq = await Token50X100IHcaC75.transferFrom.call(addressSGg60ih, addressdbIqFaB, uintwayml7q, {from: accounts[2]});
//		await Token50X100IHcaC75.onlyOwner.call({from: accounts[2]});
//		const boolKJxs6dY = await Token50X100IHcaC75.setMaxLockPeriod.call(uintb0iPSqJ, {from: accounts[0]});

		await expect(Token50X100IHcaC75.setSymbolNameDecimals.call(stringzc42rE, stringkOqtw2u, uintfH0oWFx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100s8CSS0z = await Token50X100.new({from: accounts[2]});
		const uinteYaN4T9 = BigInt("1846")
		const uint3LS2VP = BigInt("1068")
		const addressuHUiCgd = accounts[3]
		const uintEpuQr0W = BigInt("180")
		const stringDlBXSjm = "335lUnf7Sm4GtLN3BSe1atAXnxh3nvAltUDtB"
		const stringZKMwzM9 = "mtJ2oLPL9JhQR54vMVszwFS9QGQpFGuHpqLU"
		const uint256xnfBj7l = await Token50X100s8CSS0z.totalSupply.call({from: accounts[4]});
//		const boolKY2bLE4 = await Token50X100s8CSS0z.safeLock.call(uint3LS2VP, uinteYaN4T9, {from: accounts[0]});
//		const uint256gQNyGo = await Token50X100s8CSS0z.balanceOf.call(addressuHUiCgd, {from: accounts[0]});
//		await Token50X100s8CSS0z.setSymbolNameDecimals.call(stringZKMwzM9, stringDlBXSjm, uintEpuQr0W, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256bJrWry = await Token50X100s8CSS0z.totalSupply.call({from: accounts[4]});

		assert.equal(uint256xnfBj7l, BigInt("4714285714285710"))
		await expect(Token50X100s8CSS0z.safeLock.call(uint3LS2VP, uinteYaN4T9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const addressQjqOZJ8 = accounts[1]
		const addressYR1VKlB = accounts[3]
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(addressQjqOZJ8, {from: accounts[1]});
//		const addressUrrChRI = await Token50X100sjNa8ez.transferOwnership.call(addressYR1VKlB, {from: accounts[5]});

		await expect(Token50X100sjNa8ez.setOriginalContract.call(addressQjqOZJ8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yhxStp8 = await Token50X100.new({from: accounts[4]});
		const uintAwHiLJd = BigInt("35")
		const addresseVv58nz = accounts[4]
		const addressy9Co7zY = accounts[3]
		const uintqi1Nhql = BigInt("1829")
		const addressQJBik9j = accounts[1]
		const uinthv5ADgX = BigInt("292")
		const uintGCaaFpL = BigInt("646")
		const addressjyObW8A = accounts[2]
//		const boolcuhI5q = await Token50X100yhxStp8.transferFrom.call(addressy9Co7zY, addresseVv58nz, uintAwHiLJd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolt17br5H = await Token50X100yhxStp8.increaseApproval.call(addressQJBik9j, uintqi1Nhql, {from: accounts[4]});
//		const boolyVsn8NS = await Token50X100yhxStp8.setVesting.call(addressjyObW8A, uintGCaaFpL, uinthv5ADgX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100yhxStp8.transferFrom.call(addressy9Co7zY, addresseVv58nz, uintAwHiLJd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IN0Pm7q = await Token50X100.new({from: accounts[2]});
		const uintqVmL0Wr = BigInt("1447")
		const addresspn3Rd6 = accounts[3]
		const uintp1LPvzW = BigInt("403")
		const addressjt0injo = accounts[1]
		const boolUUJT8Ji = await Token50X100IN0Pm7q.approve.call(addresspn3Rd6, uintqVmL0Wr, {from: accounts[2]});
//		await Token50X100IN0Pm7q.onlyOwner.call({from: accounts[3]});
//		const boolsFH7JJP = await Token50X100IN0Pm7q.transfer.call(addressjt0injo, uintp1LPvzW, {from: accounts[2]});

		assert.equal(boolUUJT8Ji, true)
		await expect(Token50X100IN0Pm7q.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wWG4a0b = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uints0ibgfy = BigInt("1624")
		const addresstdH5ddC = accounts[3]
		const uintAglMVtN = BigInt("259")
		const uintCVgYyt7 = BigInt("988")
		const addressUBwrJ6m = accounts[4]
		const uintd6eHjYG = BigInt("1534")
		const booluIBl1XC = await Token50X100wWG4a0b.increaseApproval.call(addresstdH5ddC, uints0ibgfy, {from: accounts[3]});
		const boolg2Y1rm = await Token50X100wWG4a0b.setVesting.call(addressUBwrJ6m, uintCVgYyt7, uintAglMVtN, {from: "0x0000000000000000000000000000000000000001"});
		const boolQc15PXJ = await Token50X100wWG4a0b.setMaxLockPeriod.call(uintd6eHjYG, {from: accounts[4]});
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const addressnzw90mC = accounts[2]
		const uintyNjbu72 = BigInt("1054")
		const addressQvkKTBj = accounts[1]
		const addressUu9H4Gk = accounts[3]
//		await Token50X100sjNa8ez.release.call({from: accounts[2]});
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(addressnzw90mC, {from: accounts[1]});
//		const boolytqBdeo = await Token50X100sjNa8ez.transfer.call(addressQvkKTBj, uintyNjbu72, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUrrChRI = await Token50X100sjNa8ez.transferOwnership.call(addressUu9H4Gk, {from: accounts[5]});

		await expect(Token50X100sjNa8ez.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintI3mrT7E = BigInt("330")
		const addressyNok4u3 = accounts[4]
		const addressyPT01lj = accounts[3]
		const boolX6UzA0i = await Token50X100sjNa8ez.setMaxLockPeriod.call(uintI3mrT7E, {from: accounts[2]});
//		const addressUrrChRI = await Token50X100sjNa8ez.transferOwnership.call(addressyNok4u3, {from: accounts[5]});
//		const addressr4fxzxU = await Token50X100sjNa8ez.transferOwnership.call(addressyPT01lj, {from: accounts[4]});

		assert.equal(boolX6UzA0i, false)
		await expect(Token50X100sjNa8ez.transferOwnership.call(addressyNok4u3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const addressZpxMjaK = accounts[5]
		const addressbTpvRcZ = accounts[3]
		const uint256AO0BZMG = await Token50X100sjNa8ez.balanceOf.call(addressZpxMjaK, {from: accounts[4]});
//		const addressUrrChRI = await Token50X100sjNa8ez.transferOwnership.call(addressbTpvRcZ, {from: accounts[5]});
//		await Token50X100sjNa8ez.release.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AO0BZMG, BigInt("0"))
		await expect(Token50X100sjNa8ez.transferOwnership.call(addressbTpvRcZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const addressFC6Gl9n = accounts[0]
		const addressGwt5Q9V = accounts[4]
		const addressU3qIcJI = accounts[2]
		const uint256NPiGZBX = await Token50X100sjNa8ez.allowance.call(addressGwt5Q9V, addressFC6Gl9n, {from: accounts[2]});
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(addressU3qIcJI, {from: accounts[1]});

		assert.equal(uint256NPiGZBX, BigInt("0"))
		await expect(Token50X100sjNa8ez.setOriginalContract.call(addressU3qIcJI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintWwbytOT = BigInt("1097")
		const addressfGVN7k9 = accounts[3]
		const uintbH73cyp = BigInt("1990")
		const addressUvEvj8a = accounts[2]
		const uintNOqNqjn = BigInt("239")
		const stringDjSf6D5 = "mKz8sHOo5G6JCYylstLDjbMGxggjYdmJgMQ6QJwx4MMRqAgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gK"
		const stringWb97EEk = "SEdhKrb0PvnYAcAizh3k91hBJCM1PVA4aWwgJWJtlMv3YcIo4AM6TyqW7cnnqLdRIn"
		const uintUvyN6F = BigInt("18")
		const stringGl6ZFAa = "FOzZjnR2idmmfjY4BFxH0gyE"
		const stringW9sr9Z2 = "Xtj9"
		const address7rinFg = accounts[1]
		const booluqv7DW3 = await Token50X100sjNa8ez.approve.call(addressfGVN7k9, uintWwbytOT, {from: "0x0000000000000000000000000000000000000001"});
		const boolOYzE1n8 = await Token50X100sjNa8ez.decreaseApproval.call(addressUvEvj8a, uintbH73cyp, {from: accounts[2]});
//		await Token50X100sjNa8ez.setSymbolNameDecimals.call(stringWb97EEk, stringDjSf6D5, uintNOqNqjn, {from: accounts[2]});
//		await Token50X100sjNa8ez.setSymbolNameDecimals.call(stringW9sr9Z2, stringGl6ZFAa, uintUvyN6F, {from: accounts[2]});
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(address7rinFg, {from: accounts[1]});

		assert.equal(boolOYzE1n8, true)
		assert.equal(booluqv7DW3, true)
		await expect(Token50X100sjNa8ez.setSymbolNameDecimals.call(stringWb97EEk, stringDjSf6D5, uintNOqNqjn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintyyOCBRu = BigInt("887")
		const addressB1X7goc = accounts[3]
		const addressJRiUGJF = accounts[2]
//		const boolUM7vcdL = await Token50X100sjNa8ez.transfer.call(addressB1X7goc, uintyyOCBRu, {from: accounts[1]});
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(addressJRiUGJF, {from: accounts[1]});

		await expect(Token50X100sjNa8ez.transfer.call(addressB1X7goc, uintyyOCBRu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nhv6428 = await Token50X100.new({from: accounts[4]});
		const uintkW0N20S = BigInt("765")
		const addressAKNEqaw = accounts[1]
		const uintp9FfqFP = BigInt("668")
		const addressApLP5zS = accounts[2]
		const uintIiXReB = BigInt("173")
		const uintkOSknN8 = BigInt("682")
		const addressYBUzwxR = accounts[0]
		const uintMXnS43N = BigInt("743")
		const addressRpJ4sxk = accounts[3]
		const boolsTdLqUz = await Token50X100nhv6428.approve.call(addressAKNEqaw, uintkW0N20S, {from: accounts[2]});
		const boolqTAn5rS = await Token50X100nhv6428.increaseApproval.call(addressApLP5zS, uintp9FfqFP, {from: accounts[3]});
		const booloRy3TCx = await Token50X100nhv6428.setVesting.call(addressYBUzwxR, uintkOSknN8, uintIiXReB, {from: accounts[4]});
//		await Token50X100nhv6428.onlyOwner.call({from: accounts[4]});
//		const boold5yvJKv = await Token50X100nhv6428.decreaseApproval.call(addressRpJ4sxk, uintMXnS43N, {from: accounts[0]});

		assert.equal(booloRy3TCx, true)
		assert.equal(boolqTAn5rS, true)
		assert.equal(boolsTdLqUz, true)
		await expect(Token50X100nhv6428.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintdoR7rfv = BigInt("1990")
		const addressNbrXDHy = accounts[2]
		const uintoHK1HUO = BigInt("500")
		const uintBlPu973 = BigInt("853")
		const addressmHjLM12 = "0x0000000000000000000000000000000000000001"
		const addresshQEgv6z = accounts[5]
		const uintwC9uGwv = BigInt("239")
		const stringDjSf6D5 = "mKz8sHOo5G6JCYylstLDjbMGxggjYdmJgMQ6QJwx4MMRqAgGsbnH7VyfyZwmId6kHkaM1fxwCezFIYSn6o8gK"
		const stringWb97EEk = "SEdhKrb0PvnYAcAizh3k91hBJCM1PVA4aWwgJWJtlMv3YcIo4AM6TyqW7cnnqLdRIn"
		const uintaMOlsf1 = BigInt("18")
		const stringGl6ZFAa = "FOzZjnR2idmmfjY4BFxH0gyE"
		const stringW9sr9Z2 = "Xtj9"
		const addressh5vqz1R = accounts[1]
		const boolOYzE1n8 = await Token50X100sjNa8ez.decreaseApproval.call(addressNbrXDHy, uintdoR7rfv, {from: accounts[2]});
//		const boolWPN04G7 = await Token50X100sjNa8ez._transfer.call(addresshQEgv6z, addressmHjLM12, uintBlPu973, uintoHK1HUO, {from: accounts[2]});
//		await Token50X100sjNa8ez.setSymbolNameDecimals.call(stringWb97EEk, stringDjSf6D5, uintwC9uGwv, {from: accounts[2]});
//		await Token50X100sjNa8ez.setSymbolNameDecimals.call(stringW9sr9Z2, stringGl6ZFAa, uintaMOlsf1, {from: accounts[2]});
//		const addresseZZxQ4 = await Token50X100sjNa8ez.setOriginalContract.call(addressh5vqz1R, {from: accounts[1]});

		assert.equal(boolOYzE1n8, true)
		await expect(Token50X100sjNa8ez._transfer.call(addresshQEgv6z, addressmHjLM12, uintBlPu973, uintoHK1HUO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const boolUOBwinP = false
		const addressDs6d6c = accounts[3]
		const uintlOSqlTZ = BigInt("509")
		const addressXQ6r1kV = accounts[4]
//		await Token50X100sjNa8ez.setWhiteList.call(addressDs6d6c, boolUOBwinP, {from: accounts[2]});
//		const boolT85BIwD = await Token50X100sjNa8ez.decreaseApproval.call(addressXQ6r1kV, uintlOSqlTZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100sjNa8ez.setWhiteList.call(addressDs6d6c, boolUOBwinP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintOtivAaZ = BigInt("528")
		const addressNt05m4 = accounts[3]
		const boolT85BIwD = await Token50X100sjNa8ez.decreaseApproval.call(addressNt05m4, uintOtivAaZ, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100sjNa8ez.lock.call({from: accounts[2]});

		assert.equal(boolT85BIwD, true)
		await expect(Token50X100sjNa8ez.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const addressKvraqrg = accounts[2]
		const uintS3Qi1ju = BigInt("468")
		const addressGmC9IsK = accounts[4]
		const addressWxIy5fO = await Token50X100sjNa8ez.transferOwnership.call(addressKvraqrg, {from: accounts[2]});
		const boolT85BIwD = await Token50X100sjNa8ez.decreaseApproval.call(addressGmC9IsK, uintS3Qi1ju, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100sjNa8ez.release.call({from: accounts[3]});

		assert.equal(boolT85BIwD, true)
		await expect(Token50X100sjNa8ez.release.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UkPmnX = await Token50X100.new({from: accounts[1]});
		const boolrjamIEt = true
		const addresskdJjb2w = "0x0000000000000000000000000000000000000001"
		const addressyfHlljq = accounts[0]
		const addressuU1gAdM = accounts[0]
		const addressF03etZM = accounts[0]
//		await Token50X100UkPmnX.release.call({from: accounts[1]});
//		await Token50X100UkPmnX.setWhiteListReceivers.call(addresskdJjb2w, boolrjamIEt, {from: accounts[1]});
//		const uint256CjRJ44d = await Token50X100UkPmnX.allowance.call(addressuU1gAdM, addressyfHlljq, {from: accounts[5]});
//		const addressVbbVBss = await Token50X100UkPmnX.setOriginalContract.call(addressF03etZM, {from: accounts[2]});

		await expect(Token50X100UkPmnX.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dIb5CM = await Token50X100.new({from: accounts[4]});
		const uintRii9mee = BigInt("538")
		const addressd8fPDNj = accounts[3]
		const uintZME7pun = BigInt("70")
		const addressKxrCQ7 = accounts[0]
		const uintjyrAX6H = BigInt("1161")
		const addressh8aCGKo = accounts[5]
		const boolw6NRUhX = await Token50X100dIb5CM.setMaxLockPeriod.call(uintRii9mee, {from: accounts[4]});
//		await Token50X100dIb5CM.setTokenContract.call(addressd8fPDNj, {from: accounts[4]});
//		const booltRGnRv0 = await Token50X100dIb5CM.decreaseApproval.call(addressKxrCQ7, uintZME7pun, {from: accounts[3]});
//		const booleEhg1Cc = await Token50X100dIb5CM.transfer.call(addressh8aCGKo, uintjyrAX6H, {from: accounts[2]});

		assert.equal(boolw6NRUhX, false)
		await expect(Token50X100dIb5CM.setTokenContract.call(addressd8fPDNj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dIb5CM = await Token50X100.new({from: accounts[4]});
		const uintCwr0Rv5 = BigInt("521")
		const uintmQ78B1g = BigInt("70")
		const addressDplCMyB = accounts[0]
		const addressG09ZETE = accounts[0]
		const addressjXD8gTR = accounts[1]
		const uinty06fhye = BigInt("1352")
		const addresssrpOIpE = accounts[0]
		const uintPPvy545 = BigInt("1161")
		const addressL1mHDAn = accounts[5]
		const boolw6NRUhX = await Token50X100dIb5CM.setMaxLockPeriod.call(uintCwr0Rv5, {from: accounts[4]});
		const booltRGnRv0 = await Token50X100dIb5CM.decreaseApproval.call(addressDplCMyB, uintmQ78B1g, {from: accounts[3]});
//		await Token50X100dIb5CM.setLinkingAddresses.call(addressjXD8gTR, addressG09ZETE, {from: accounts[4]});
//		const booljcyItR6 = await Token50X100dIb5CM.decreaseApproval.call(addresssrpOIpE, uinty06fhye, {from: accounts[3]});
//		const booleEhg1Cc = await Token50X100dIb5CM.transfer.call(addressL1mHDAn, uintPPvy545, {from: accounts[2]});

		assert.equal(booltRGnRv0, true)
		assert.equal(boolw6NRUhX, false)
		await expect(Token50X100dIb5CM.setLinkingAddresses.call(addressjXD8gTR, addressG09ZETE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dIb5CM = await Token50X100.new({from: accounts[4]});
		const uintzo1O8Ql = BigInt("538")
		const uintH5qtCBS = BigInt("0")
		const addresstYavyeS = accounts[0]
		const uintUxwtIPi = BigInt("1161")
		const addressMiHYchI = accounts[5]
		const addressrrhCCu4 = "0x0000000000000000000000000000000000000001"
		const boolw6NRUhX = await Token50X100dIb5CM.setMaxLockPeriod.call(uintzo1O8Ql, {from: accounts[4]});
		const booltRGnRv0 = await Token50X100dIb5CM.decreaseApproval.call(addresstYavyeS, uintH5qtCBS, {from: accounts[3]});
//		const booleEhg1Cc = await Token50X100dIb5CM.transfer.call(addressMiHYchI, uintUxwtIPi, {from: accounts[2]});
//		const addressH2OlM5n = await Token50X100dIb5CM.transferOwnership.call(addressrrhCCu4, {from: accounts[4]});

		assert.equal(booltRGnRv0, true)
		assert.equal(boolw6NRUhX, false)
		await expect(Token50X100dIb5CM.transfer.call(addressMiHYchI, uintUxwtIPi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sjNa8ez = await Token50X100.new({from: accounts[2]});
		const uintkLh0nNy = BigInt("1801")
		const addresssmJgtc4 = "0x0000000000000000000000000000000000000000"
		const uintX7M8YV = BigInt("468")
		const addressklRBCsd = accounts[3]
		const uintzzqATWL = BigInt("689")
		const uintyJpXyKu = BigInt("881")
		const addressLn0aQl9 = accounts[0]
//		const boolv4yjvyx = await Token50X100sjNa8ez.transfer.call(addresssmJgtc4, uintkLh0nNy, {from: accounts[1]});
//		const boolT85BIwD = await Token50X100sjNa8ez.decreaseApproval.call(addressklRBCsd, uintX7M8YV, {from: "0x0000000000000000000000000000000000000001"});
//		const boole4eljB = await Token50X100sjNa8ez.setVesting.call(addressLn0aQl9, uintyJpXyKu, uintzzqATWL, {from: accounts[5]});

		await expect(Token50X100sjNa8ez.transfer.call(addresssmJgtc4, uintkLh0nNy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})