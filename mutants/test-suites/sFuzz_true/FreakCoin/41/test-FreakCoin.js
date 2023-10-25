const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinbAnqiu6 = await FreakCoin.new({from: accounts[0]});
		const addressGULZsmX = accounts[0]
		const addressSPlURHh = accounts[0]
		const addressC6GHtQS = "0x0000000000000000000000000000000000000001"
		const uint256PiuqtxT = await FreakCoinbAnqiu6.allUserBalances.call(addressGULZsmX, {from: accounts[2]});
		const uint256dUFY6fp = await FreakCoinbAnqiu6.allUserBalances.call(addressSPlURHh, {from: accounts[3]});
//		const uint256xQWI0O8 = await FreakCoinbAnqiu6.allUserBalances.call(addressC6GHtQS, {from: accounts[5]});

		await expect(FreakCoinbAnqiu6.allUserBalances.call(addressC6GHtQS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinqMYYiuM = await FreakCoin.new({from: accounts[1]});
		const addressbxP2dwi = accounts[4]
		const addressUOhYe8j = accounts[3]
		const addressSSjwYpK = accounts[0]
		const uint256YBwqAO = await FreakCoinqMYYiuM.allowance.call(addressUOhYe8j, addressbxP2dwi, {from: accounts[1]});
//		const uint256rk3DDxY = await FreakCoinqMYYiuM.allUserBalances.call(addressSSjwYpK, {from: accounts[0]});

		assert.equal(uint256YBwqAO, BigInt("0"))
		await expect(FreakCoinqMYYiuM.allUserBalances.call(addressSSjwYpK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniFQHCRR = await FreakCoin.new({from: accounts[5]});
		const addressBDEzMum = accounts[0]
		const uint256oIaVI2 = await FreakCoiniFQHCRR.totalSupply.call({from: accounts[3]});
//		const addressj3EjO0R = await FreakCoiniFQHCRR.setUniswapAddress.call(addressBDEzMum, {from: accounts[2]});

		assert.equal(uint256oIaVI2, BigInt("1000000"))
		await expect(FreakCoiniFQHCRR.setUniswapAddress.call(addressBDEzMum, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVer4qM = await FreakCoin.new({from: accounts[5]});
		const uintUanRKuY = BigInt("817")
		const addressQEW2nni = accounts[1]
		const uintTpEqht = BigInt("1474")
		const addressrBvNoIL = accounts[3]
		const uintHpBC00 = BigInt("639")
		const addressim0l0Tf = "0x0000000000000000000000000000000000000001"
		const booloPxDKKV = await FreakCoinVer4qM.approve.call(addressQEW2nni, uintUanRKuY, {from: accounts[1]});
//		const boolp0ZrVGw = await FreakCoinVer4qM.transfer.call(addressrBvNoIL, uintTpEqht, {from: accounts[2]});
//		const boolAXkWvgS = await FreakCoinVer4qM.transfer.call(addressim0l0Tf, uintHpBC00, {from: accounts[0]});

		assert.equal(booloPxDKKV, true)
		await expect(FreakCoinVer4qM.transfer.call(addressrBvNoIL, uintTpEqht, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinpO2Y2zu = await FreakCoin.new({from: accounts[0]});
		const addressVrFbSt2 = accounts[0]
		const addressWCNkPbF = accounts[1]
		const addresshoqyOh = accounts[2]
		const addressWB6z8Io = accounts[4]
		const uint256TopBmB = await FreakCoinpO2Y2zu.balanceOf.call(addressVrFbSt2, {from: accounts[2]});
		const addressSw4cZG = await FreakCoinpO2Y2zu.uniswapAddress.call({from: accounts[0]});
		const uint256TXpWedn = await FreakCoinpO2Y2zu.totalSupply.call({from: accounts[0]});
		const uint256RCJ9sZd = await FreakCoinpO2Y2zu.balanceOf.call(addressWCNkPbF, {from: accounts[0]});
		const uint256RXOLxU9 = await FreakCoinpO2Y2zu.balanceOf.call(addresshoqyOh, {from: accounts[2]});
		const uint256lLsxUs3 = await FreakCoinpO2Y2zu.balanceOf.call(addressWB6z8Io, {from: accounts[1]});

		assert.equal(addressSw4cZG, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256RCJ9sZd, BigInt("0"))
		assert.equal(uint256RXOLxU9, BigInt("0"))
		assert.equal(uint256TXpWedn, BigInt("1000000"))
		assert.equal(uint256TopBmB, BigInt("1000000"))
		assert.equal(uint256lLsxUs3, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinI1r320v = await FreakCoin.new({from: accounts[0]});
		const uints6KGx01 = BigInt("1207")
		const addressGWvhkhJ = accounts[2]
		const addressUvNJiEN = accounts[3]
		const addressut7ySW0 = accounts[0]
		const address8NFUuY = "0x0000000000000000000000000000000000000001"
		const addressEEK0rDp = accounts[3]
		const uintkmN5XPF = BigInt("1269")
		const addressy9KiJku = accounts[0]
		const addressx4SLmMe = accounts[3]
//		const booljgw7IW5 = await FreakCoinI1r320v.transferFrom.call(addressUvNJiEN, addressGWvhkhJ, uints6KGx01, {from: accounts[1]});
//		const uint256KEoC3Vb = await FreakCoinI1r320v.allowance.call(address8NFUuY, addressut7ySW0, {from: accounts[5]});
//		const uint256Hu4cJUQ = await FreakCoinI1r320v.balanceOf.call(addressEEK0rDp, {from: accounts[1]});
//		const boolualInl5 = await FreakCoinI1r320v.approve.call(addressy9KiJku, uintkmN5XPF, {from: accounts[0]});
//		const addressJF1nesj = await FreakCoinI1r320v.setUniswapAddress.call(addressx4SLmMe, {from: accounts[4]});

		await expect(FreakCoinI1r320v.transferFrom.call(addressUvNJiEN, addressGWvhkhJ, uints6KGx01, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVer4qM = await FreakCoin.new({from: accounts[5]});
		const uintLaUYWL = BigInt("817")
		const addresspvsLHbg = accounts[1]
		const addressjIuRQfs = accounts[2]
		const uintlg1eJXY = BigInt("639")
		const addresstP9VnB = "0x0000000000000000000000000000000000000001"
		const booloPxDKKV = await FreakCoinVer4qM.approve.call(addresspvsLHbg, uintLaUYWL, {from: accounts[1]});
		const addressur76C0E = await FreakCoinVer4qM.setUniswapAddress.call(addressjIuRQfs, {from: accounts[5]});
//		const boolAXkWvgS = await FreakCoinVer4qM.transfer.call(addresstP9VnB, uintlg1eJXY, {from: accounts[0]});

		assert.equal(booloPxDKKV, true)
		await expect(FreakCoinVer4qM.transfer.call(addresstP9VnB, uintlg1eJXY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJszLwHA = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpOnNwVm = BigInt("1628")
		const addressSaOS3co = accounts[3]
		const uintz8hspjS = BigInt("1438")
		const addressQr6Sl35 = accounts[0]
		const addressHL9uMBG = accounts[0]
		const uintKEO3dS4 = BigInt("1086")
		const addressIF7Bgz = accounts[0]
		const boolg70oZa = await FreakCoinJszLwHA.transfer.call(addressSaOS3co, uintpOnNwVm, {from: accounts[2]});
		const boolOuv81vr = await FreakCoinJszLwHA.approve.call(addressQr6Sl35, uintz8hspjS, {from: accounts[4]});
		const addressLaKZ1Ab = await FreakCoinJszLwHA.setUniswapAddress.call(addressHL9uMBG, {from: accounts[3]});
		const uint256rCdFMHm = await FreakCoinJszLwHA.totalSupply.call({from: accounts[1]});
		const booltXRYNB8 = await FreakCoinJszLwHA.transfer.call(addressIF7Bgz, uintKEO3dS4, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniFQHCRR = await FreakCoin.new({from: accounts[5]});
		const uintbnHFzh = BigInt("1225")
		const addressQm3CCI3 = "0x0000000000000000000000000000000000000001"
		const addressu3p7g9E = accounts[2]
		const uintlRg6pCD = BigInt("344")
		const addressyyhoDLu = accounts[2]
		const boolMEpHXOT = await FreakCoiniFQHCRR.transfer.call(addressQm3CCI3, uintbnHFzh, {from: accounts[5]});
//		const addressj3EjO0R = await FreakCoiniFQHCRR.setUniswapAddress.call(addressu3p7g9E, {from: accounts[2]});
//		const boolq8JrWqQ = await FreakCoiniFQHCRR.approve.call(addressyyhoDLu, uintlRg6pCD, {from: accounts[2]});

		assert.equal(boolMEpHXOT, true)
		await expect(FreakCoiniFQHCRR.setUniswapAddress.call(addressu3p7g9E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinI1r320v = await FreakCoin.new({from: accounts[0]});
		const uintY6ZeJ64 = BigInt("809")
		const addressyAxo2D = accounts[0]
		const uintD5Jhee = BigInt("1207")
		const addressEUmhyms = accounts[3]
		const addressQzo6pt = accounts[3]
		const boolb4LCa3Q = await FreakCoinI1r320v.transfer.call(addressyAxo2D, uintY6ZeJ64, {from: accounts[0]});
//		const booljgw7IW5 = await FreakCoinI1r320v.transferFrom.call(addressQzo6pt, addressEUmhyms, uintD5Jhee, {from: accounts[1]});

		assert.equal(boolb4LCa3Q, true)
		await expect(FreakCoinI1r320v.transferFrom.call(addressQzo6pt, addressEUmhyms, uintD5Jhee, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})