const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2jqML9ve = await DmmControllerV2.new({from: accounts[0]});
		const addressX4MsgJH = accounts[1]
		const uintcEDusBp = BigInt("1646")
		const uintflKWCHu = BigInt("1235")
		const uinta7un9uZ = BigInt("1704")
		const uinty1JaLqj = await DmmControllerV2jqML9ve.getExchangeRateByUnderlying.call(addressX4MsgJH, {from: accounts[0]});
		await DmmControllerV2jqML9ve.unpause.call({from: accounts[3]});
		const 
bdrLciG = await DmmControllerV2jqML9ve.decreaseTotalSupply.call(uintflKWCHu, uintcEDusBp, {from: accounts[4]});
		await DmmControllerV2jqML9ve.onlyOwner.call({from: accounts[3]});
		const uintQnonS4x = await DmmControllerV2jqML9ve.disableMarket.call(uinta7un9uZ, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswS8mvSU = accounts[1]
		const addressHbophOY = accounts[3]
		const addressYVtmuQf = "0x0000000000000000000000000000000000000001"
		const addressFI1jfGE = accounts[5]
		const addresstrFqk9t = accounts[0]
		const addressmi4hco0 = "0x0000000000000000000000000000000000000001"
		const addresslrr9KD2 = accounts[4]
		const addressnru583l = accounts[1]
		const addressAWWD5vA = "0x0000000000000000000000000000000000000001"
		const uintZdpIytD = BigInt("1991")
		const uintZ9tWzbk = BigInt("267")
		const addressxFa3M23 = accounts[0]
		const DmmControllerV2CCCMuip = await DmmControllerV2.new(addresswS8mvSU, addressHbophOY, addressYVtmuQf, addressFI1jfGE, addresstrFqk9t, addressmi4hco0, addresslrr9KD2, addressnru583l, addressAWWD5vA, uintZdpIytD, uintZ9tWzbk, addressxFa3M23, {from: accounts[0]});
		const uintWLY2tqs = BigInt("351")
		const addressZ7xnbqG = accounts[4]
		const addressCt7JJT8 = accounts[1]
		const addressDiQaNAW = accounts[4]
		const uintlipWMQ = BigInt("1281")
		const addressd4J8r1e = accounts[4]
		const uintHv7KIXd = await DmmControllerV2CCCMuip.requireTokenExists.call(uintWLY2tqs, {from: accounts[0]});
		const addresslcpN8Np = await DmmControllerV2CCCMuip.setOffChainAssetValuator.call(addressZ7xnbqG, {from: accounts[1]});
		const 
gMCdo9G = await DmmControllerV2CCCMuip.initialize.call(addressDiQaNAW, addressCt7JJT8, {from: accounts[0]});
		const addressgVriX4D = await DmmControllerV2CCCMuip.getDmmTokenAddressByDmmTokenId.call(uintlipWMQ, {from: accounts[5]});
		const addressc7pYypd = await DmmControllerV2CCCMuip.getDmmTokenForUnderlying.call(addressd4J8r1e, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresso3GMF3 = accounts[2]
		const addressOiSNEBz = accounts[5]
		const addressvX0NQWt = accounts[4]
		const addressNKT9Ig0 = accounts[2]
		const addressUEzzR8P = accounts[3]
		const addressCZqYUgU = accounts[2]
		const addressfUDD2c = accounts[1]
		const addressh0VwbdD = accounts[1]
		const addressjRLPbV3 = accounts[1]
		const uintOrhkbJ2 = BigInt("540")
		const uintxUqdgHH = BigInt("1880")
		const addressXJhKgtJ = accounts[2]
		const DmmControllerV2kECHJta = await DmmControllerV2.new(addresso3GMF3, addressOiSNEBz, addressvX0NQWt, addressNKT9Ig0, addressUEzzR8P, addressCZqYUgU, addressfUDD2c, addressh0VwbdD, addressjRLPbV3, uintOrhkbJ2, uintxUqdgHH, addressXJhKgtJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintLjXSSK3 = BigInt("772")
		const addresszO7FuO7 = accounts[5]
		const addresstuU0BHp = accounts[4]
		const uintAiwWbS9 = await DmmControllerV2kECHJta.requireCanWithdrawFunds.call(uintLjXSSK3, {from: accounts[1]});
		const addressOUMgS9y = await DmmControllerV2kECHJta.getUnderlyingTokenForDmm.call(addresszO7FuO7, {from: accounts[1]});
		const addressBKWpbnC = await DmmControllerV2kECHJta.addPauser.call(addresstuU0BHp, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFn6qMIq = accounts[1]
		const address4CyrTL = accounts[5]
		const addressKfuKRX = accounts[1]
		const addressXGqTa1Q = accounts[1]
		const addressl0oME6 = accounts[0]
		const addressKOXGTnZ = accounts[4]
		const addressTWwKQXi = accounts[5]
		const addresskM6J7jM = accounts[3]
		const addressTgNdY8M = accounts[2]
		const uintLXOp1K3 = BigInt("1365")
		const uintsMiTce4 = BigInt("1986")
		const addressPaA6Ng = accounts[0]
		const DmmControllerV2MS15ko2 = await DmmControllerV2.new(addressFn6qMIq, address4CyrTL, addressKfuKRX, addressXGqTa1Q, addressl0oME6, addressKOXGTnZ, addressTWwKQXi, addresskM6J7jM, addressTgNdY8M, uintLXOp1K3, uintsMiTce4, addressPaA6Ng, {from: accounts[4]});
		const addressEZNtvBk = accounts[1]
		const addressuYzms3W = accounts[0]
		const addressMv30Cnf = await DmmControllerV2MS15ko2.transferOwnership.call(addressEZNtvBk, {from: accounts[5]});
		const addressj30qhzj = await DmmControllerV2MS15ko2.unBlacklist.call(addressuYzms3W, {from: accounts[4]});
		const addressxDAFaR = await DmmControllerV2MS15ko2.owner.call({from: accounts[2]});
		await DmmControllerV2MS15ko2.renounceOwnership.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressYfgA9k3 = accounts[4]
		const addressqekB33r = accounts[1]
		const addressrGT6hjV = accounts[4]
		const addressXt7hP7e = accounts[4]
		const addressHGOjUu = accounts[2]
		const addressJ2qYgkq = accounts[2]
		const addressQOVT6Ks = accounts[0]
		const addressLGXDWrY = accounts[3]
		const addressqrcOX96 = accounts[0]
		const uintxhgTvj6 = BigInt("1027")
		const uintLweMvFo = BigInt("73")
		const addressXlky3iP = accounts[4]
		const DmmControllerV2UZNxUNC = await DmmControllerV2.new(addressYfgA9k3, addressqekB33r, addressrGT6hjV, addressXt7hP7e, addressHGOjUu, addressJ2qYgkq, addressQOVT6Ks, addressLGXDWrY, addressqrcOX96, uintxhgTvj6, uintLweMvFo, addressXlky3iP, {from: accounts[4]});
		const uintIXeutBN = BigInt("170")
		const uint9ShLsv = BigInt("964")
		const uintLkgIZ5L = BigInt("104")
		const 
p5C5dU = await DmmControllerV2UZNxUNC.increaseTotalSupply.call(uint9ShLsv, uintIXeutBN, {from: accounts[1]});
		const uintHHKU3Il = await DmmControllerV2UZNxUNC.getInterestRateByDmmTokenId.call(uintLkgIZ5L, {from: accounts[0]});
		const addresslsa5Wvi = await DmmControllerV2UZNxUNC.guardian.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRT1UfWi = accounts[5]
		const addressU6BCW3t = accounts[1]
		const addressP7ipat = accounts[4]
		const addressDtDrf3 = accounts[4]
		const addressYPymCEu = accounts[2]
		const addresssYDvSB0 = accounts[2]
		const addresscV7g1qx = accounts[1]
		const addressSpUILPo = accounts[0]
		const addressN0GNvbX = accounts[2]
		const uintPzK5efG = BigInt("1261")
		const uintbdQ8qwD = BigInt("1625")
		const address1zLpm0 = accounts[5]
		const DmmControllerV2YIzfyb1 = await DmmControllerV2.new(addressRT1UfWi, addressU6BCW3t, addressP7ipat, addressDtDrf3, addressYPymCEu, addresssYDvSB0, addresscV7g1qx, addressSpUILPo, addressN0GNvbX, uintPzK5efG, uintbdQ8qwD, address1zLpm0, {from: accounts[2]});
		const addressPUCNYTe = accounts[4]
		const uintCVr1afp = BigInt("145")
		const addressaq2taCJ = accounts[1]
		const uintdLUW29C = await DmmControllerV2YIzfyb1.getInterestRateByUnderlyingTokenAddress.call(addressPUCNYTe, {from: accounts[3]});
		await DmmControllerV2YIzfyb1.whenPaused.call({from: accounts[0]});
		const uintGDkWRIA = await DmmControllerV2YIzfyb1.disableMarket.call(uintCVr1afp, {from: accounts[0]});
		const uintj0JNdY4 = await DmmControllerV2YIzfyb1.getExchangeRateByUnderlying.call(addressaq2taCJ, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressvZWosEu = accounts[1]
		const addresss1csrYo = accounts[1]
		const addressYiwDAtc = accounts[5]
		const addressYqOgRko = accounts[2]
		const addressuY1hacu = accounts[0]
		const addressKCYhR0 = accounts[2]
		const address6yyDYW = accounts[2]
		const addressvUIj8D7 = accounts[1]
		const addressU0Jwk0l = accounts[3]
		const uintqNHkHEF = BigInt("445")
		const uintqIWYHgz = BigInt("574")
		const addressxHhWG5h = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2ivs7mrk = await DmmControllerV2.new(addressvZWosEu, addresss1csrYo, addressYiwDAtc, addressYqOgRko, addressuY1hacu, addressKCYhR0, address6yyDYW, addressvUIj8D7, addressU0Jwk0l, uintqNHkHEF, uintqIWYHgz, addressxHhWG5h, {from: accounts[0]});
		const uintULwfZxm = BigInt("1135")
		const uintEbXz6Cy = BigInt("350")
		const uintXoTTy5S = BigInt("1735")
		const uintjBLiPQ = BigInt("185")
		const stringcSxcJTU = "iIOrERSEuJtgoRECXn6vVlsYImJLhYweAhE0kRSePvRJnx6FiU9bhhDK74x4jk456Gyf4QkqM8mkZ30FdRruN"
		const stringUzpRIwQ = "eNAWJGEiLvY1kb0p6OEnLAyweP"
		const addresshvugo3 = accounts[0]
		const addressgoZ5Ih = await DmmControllerV2ivs7mrk.owner.call({from: accounts[0]});
		const 
LxsnKnE = await DmmControllerV2ivs7mrk.addMarket.call(addresshvugo3, stringUzpRIwQ, stringcSxcJTU, uintjBLiPQ, uintXoTTy5S, uintEbXz6Cy, uintULwfZxm, {from: accounts[3]});
		await DmmControllerV2ivs7mrk.unpause.call({from: accounts[3]});
	});
})