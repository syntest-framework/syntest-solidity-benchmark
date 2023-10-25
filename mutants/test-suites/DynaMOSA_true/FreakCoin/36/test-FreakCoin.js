const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinTXeWkOn = await FreakCoin.new({from: accounts[3]});
		const addresseqxxWzS = "0x0000000000000000000000000000000000000001"
		const addressrFW3Pwf = accounts[1]
		const addressRKW2DuK = accounts[3]
		const addressqfYAG1T = accounts[3]
		const uintJXkwC6Y = BigInt("599")
		const addressEFOy9X9 = accounts[4]
		const addressRdG0ukt = accounts[2]
		const uint256j6UGwZt = await FreakCoinTXeWkOn.balanceOf.call(addresseqxxWzS, {from: accounts[0]});
		const uint256UYrTVnH = await FreakCoinTXeWkOn.allowance.call(addressRKW2DuK, addressrFW3Pwf, {from: accounts[4]});
		const uint256YV80jN = await FreakCoinTXeWkOn.allUserBalances.call(addressqfYAG1T, {from: "0x0000000000000000000000000000000000000001"});
		const boolASe6a0m = await FreakCoinTXeWkOn.approve.call(addressEFOy9X9, uintJXkwC6Y, {from: accounts[1]});
//		const addressNWJuZHH = await FreakCoinTXeWkOn.setUniswapAddress.call(addressRdG0ukt, {from: accounts[1]});

		assert.equal(boolASe6a0m, true)
		assert.equal(uint256UYrTVnH, BigInt("0"))
		assert.equal(uint256j6UGwZt, BigInt("0"))
		await expect(FreakCoinTXeWkOn.setUniswapAddress.call(addressRdG0ukt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinG46TroM = await FreakCoin.new({from: accounts[3]});
		const uintuY3Oz4I = BigInt("293")
		const addressV7aGMLM = accounts[2]
		const addressiWq9KcH = accounts[4]
		const addresshChnLB8 = accounts[0]
		const uintz5zvABt = BigInt("2030")
		const addressY0tTt4u = accounts[2]
		const boolRjNbKUl = await FreakCoinG46TroM.transfer.call(addressV7aGMLM, uintuY3Oz4I, {from: accounts[3]});
//		const uint256pyCBUrU = await FreakCoinG46TroM.allUserBalances.call(addressiWq9KcH, {from: accounts[0]});
//		const uint256V7uWFwS = await FreakCoinG46TroM.allUserBalances.call(addresshChnLB8, {from: accounts[2]});
//		const boolYz60ygQ = await FreakCoinG46TroM.transfer.call(addressY0tTt4u, uintz5zvABt, {from: accounts[0]});

		assert.equal(boolRjNbKUl, true)
		await expect(FreakCoinG46TroM.allUserBalances.call(addressiWq9KcH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinWpIKcMC = await FreakCoin.new({from: accounts[2]});
		const uintcHcUreN = BigInt("143")
		const addressslnrZlZ = accounts[2]
		const uintcBg276x = BigInt("1741")
		const addressJDd4Sq8 = accounts[3]
		const addressfXSqxCY = await FreakCoinWpIKcMC.uniswapAddress.call({from: accounts[1]});
//		const boolmVC0fcA = await FreakCoinWpIKcMC.transfer.call(addressslnrZlZ, uintcHcUreN, {from: accounts[4]});
//		const boolP7ByQZm = await FreakCoinWpIKcMC.approve.call(addressJDd4Sq8, uintcBg276x, {from: accounts[2]});
//		const addresswBnpn14 = await FreakCoinWpIKcMC.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressfXSqxCY, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinWpIKcMC.transfer.call(addressslnrZlZ, uintcHcUreN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinbmAd7RO = await FreakCoin.new({from: accounts[4]});
		const uintcd6L3Rq = BigInt("819")
		const addressfqQ3Quj = accounts[1]
		const addresseqff9Ar = accounts[0]
		const addressLYCN6CA = accounts[4]
		const addressYh0X301 = accounts[5]
		const addressKRMEMtP = accounts[4]
//		const boolHUm5nzm = await FreakCoinbmAd7RO.transferFrom.call(addresseqff9Ar, addressfqQ3Quj, uintcd6L3Rq, {from: accounts[0]});
//		const uint256SwvgUMe = await FreakCoinbmAd7RO.allowance.call(addressYh0X301, addressLYCN6CA, {from: accounts[4]});
//		const addressQ32fNsY = await FreakCoinbmAd7RO.setUniswapAddress.call(addressKRMEMtP, {from: accounts[2]});

		await expect(FreakCoinbmAd7RO.transferFrom.call(addresseqff9Ar, addressfqQ3Quj, uintcd6L3Rq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDWvj04c = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyNYLheI = BigInt("534")
		const addressP7wMUWI = accounts[0]
		const addressT4cyTcO = accounts[5]
		const uintnQlyye0 = BigInt("1125")
		const addresstxPq2v1 = accounts[2]
		const boolyg5Y2Ar = await FreakCoinDWvj04c.transferFrom.call(addressT4cyTcO, addressP7wMUWI, uintyNYLheI, {from: accounts[2]});
		const boolvJ3YyDk = await FreakCoinDWvj04c.transfer.call(addresstxPq2v1, uintnQlyye0, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinLKDrsqt = await FreakCoin.new({from: accounts[3]});
		const addresso79ImcX = accounts[4]
		const addresstZInOum = accounts[1]
		const addressmL9oYg3 = accounts[0]
		const addressvE2nVdN = accounts[3]
		const addressKIsnhb = "0x0000000000000000000000000000000000000001"
		const addressyRUxRC9 = accounts[3]
		const addresswv7x3fE = await FreakCoinLKDrsqt.setUniswapAddress.call(addresso79ImcX, {from: accounts[3]});
//		const uint256Y0ehOt9 = await FreakCoinLKDrsqt.allUserBalances.call(addresstZInOum, {from: accounts[0]});
//		const uint256Bsu1Ir0 = await FreakCoinLKDrsqt.balanceOf.call(addressmL9oYg3, {from: accounts[5]});
//		const addressk2q2R3m = await FreakCoinLKDrsqt.setUniswapAddress.call(addressvE2nVdN, {from: accounts[4]});
//		const uint256UMyhvvc = await FreakCoinLKDrsqt.allowance.call(addressyRUxRC9, addressKIsnhb, {from: accounts[2]});

		await expect(FreakCoinLKDrsqt.allUserBalances.call(addresstZInOum, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinG46TroM = await FreakCoin.new({from: accounts[3]});
		const uintH3kZAjp = BigInt("293")
		const addressA9IOJS1 = accounts[3]
		const addressfQQrYwJ = accounts[0]
		const uintenAKeqe = BigInt("655")
		const addressplhNy16 = accounts[2]
		const boolRjNbKUl = await FreakCoinG46TroM.transfer.call(addressA9IOJS1, uintH3kZAjp, {from: accounts[3]});
//		const uint256V7uWFwS = await FreakCoinG46TroM.allUserBalances.call(addressfQQrYwJ, {from: accounts[2]});
//		const boolYz60ygQ = await FreakCoinG46TroM.transfer.call(addressplhNy16, uintenAKeqe, {from: accounts[0]});

		assert.equal(boolRjNbKUl, true)
		await expect(FreakCoinG46TroM.allUserBalances.call(addressfQQrYwJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})