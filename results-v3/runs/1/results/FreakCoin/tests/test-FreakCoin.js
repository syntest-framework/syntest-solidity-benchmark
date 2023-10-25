const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinRtMMsnw = await FreakCoin.new({from: accounts[2]});
		const addressRSZ3sv7 = "0x0000000000000000000000000000000000000001"
		const uintjcSLSTa = BigInt("1068")
		const addressijVUmn3 = accounts[2]
		const addressFHVBBdk = accounts[0]
		const uinteAA7wGX = BigInt("1871")
		const addresszUMf1jc = accounts[0]
		const uint256y5TvP0I = await FreakCoinRtMMsnw.allUserBalances.call(addressRSZ3sv7, {from: "0x0000000000000000000000000000000000000001"});
		const boolX1uJH7x = await FreakCoinRtMMsnw.transferFrom.call(addressFHVBBdk, addressijVUmn3, uintjcSLSTa, {from: accounts[3]});
		const bool3ZTH8b = await FreakCoinRtMMsnw.transfer.call(addresszUMf1jc, uinteAA7wGX, {from: accounts[4]});

		await expect(FreakCoinRtMMsnw.allUserBalances.call(addressRSZ3sv7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinoIxjWn6 = await FreakCoin.new({from: accounts[5]});
		const uintD4ywnmK = BigInt("41")
		const addressAVdc2yl = accounts[1]
		const addresshRupeuE = "0x0000000000000000000000000000000000000001"
		const boolRM0MpKC = await FreakCoinoIxjWn6.transfer.call(addressAVdc2yl, uintD4ywnmK, {from: accounts[3]});
		const addressYi84YwY = await FreakCoinoIxjWn6.uniswapAddress.call({from: accounts[3]});
		const uint256Asq3v7u = await FreakCoinoIxjWn6.allUserBalances.call(addresshRupeuE, {from: accounts[1]});

		await expect(FreakCoinoIxjWn6.transfer.call(addressAVdc2yl, uintD4ywnmK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniJ20bTm = await FreakCoin.new({from: accounts[0]});
		const uintz1bFnwj = BigInt("895")
		const addressmXB0z7v = accounts[0]
		const addressOeLgEX1 = accounts[3]
		const addressCbRkumY = accounts[0]
		const addressWuQrkia = accounts[2]
		const addressSULT2nW = await FreakCoiniJ20bTm.uniswapAddress.call({from: accounts[1]});
		const uint256KtI472X = await FreakCoiniJ20bTm.totalSupply.call({from: accounts[0]});
		const booluRyVJh8 = await FreakCoiniJ20bTm.transferFrom.call(addressOeLgEX1, addressmXB0z7v, uintz1bFnwj, {from: accounts[4]});
		const uint256ZA4dPmX = await FreakCoiniJ20bTm.allowance.call(addressWuQrkia, addressCbRkumY, {from: accounts[5]});

		assert.equal(addressSULT2nW, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256KtI472X, BigInt("1000000"))
		await expect(FreakCoiniJ20bTm.transferFrom.call(addressOeLgEX1, addressmXB0z7v, uintz1bFnwj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinCTnNZU1 = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVw367Gs = accounts[0]
		const uintVrZzoq = BigInt("358")
		const addressdJGwyb = accounts[1]
		const addressT0JFdaC = accounts[4]
		const uintWAqvBR = BigInt("1096")
		const addressW1X2cI3 = accounts[1]
		const uint1p4U0D = BigInt("1969")
		const addressF1KCbfJ = accounts[4]
		const addressRv0hDJe = accounts[1]
		const uint256sxk0jVu = await FreakCoinCTnNZU1.allUserBalances.call(addressVw367Gs, {from: accounts[3]});
		const boolg9KuJxj = await FreakCoinCTnNZU1.approve.call(addressdJGwyb, uintVrZzoq, {from: accounts[5]});
		const uint256Xkcxqc = await FreakCoinCTnNZU1.allUserBalances.call(addressT0JFdaC, {from: accounts[4]});
		const boolepXuPCP = await FreakCoinCTnNZU1.approve.call(addressW1X2cI3, uintWAqvBR, {from: accounts[1]});
		const boolhT2WLgd = await FreakCoinCTnNZU1.transferFrom.call(addressRv0hDJe, addressF1KCbfJ, uint1p4U0D, {from: accounts[3]});
		const addressb723xK = await FreakCoinCTnNZU1.uniswapAddress.call({from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKPKaZ4G = await FreakCoin.new({from: accounts[4]});
		const uintre3qXxe = BigInt("967")
		const addressO5k1CG = accounts[4]
		const boolUhbi6Ss = await FreakCoinKPKaZ4G.approve.call(addressO5k1CG, uintre3qXxe, {from: accounts[4]});
		const addressgTIExgX = await FreakCoinKPKaZ4G.uniswapAddress.call({from: accounts[4]});
		const uint256cpl2f2 = await FreakCoinKPKaZ4G.totalSupply.call({from: accounts[0]});

		assert.equal(addressgTIExgX, 0x0000000000000000000000000000000000000000)
		assert.equal(boolUhbi6Ss, true)
		assert.equal(uint256cpl2f2, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinSvg8pwR = await FreakCoin.new({from: accounts[1]});
		const uintVAnw2PS = BigInt("1958")
		const addressVp5BlTL = accounts[3]
		const uintD67vDuz = BigInt("1969")
		const addressfBQjGfT = accounts[2]
		const uinto7krPd = BigInt("1415")
		const addressDdJ0pe = accounts[5]
		const addressIUnEQ9w = accounts[3]
		const uint2567OyH0d = await FreakCoinSvg8pwR.totalSupply.call({from: accounts[5]});
		const booltabF9w6 = await FreakCoinSvg8pwR.transfer.call(addressVp5BlTL, uintVAnw2PS, {from: accounts[1]});
		const boolMuys6i1 = await FreakCoinSvg8pwR.transfer.call(addressfBQjGfT, uintD67vDuz, {from: accounts[0]});
		const boolIqBbejB = await FreakCoinSvg8pwR.transfer.call(addressDdJ0pe, uinto7krPd, {from: accounts[2]});
		const addressR2Ck3Ir = await FreakCoinSvg8pwR.setUniswapAddress.call(addressIUnEQ9w, {from: accounts[1]});

		assert.equal(booltabF9w6, true)
		assert.equal(uint2567OyH0d, BigInt("1000000"))
		await expect(FreakCoinSvg8pwR.transfer.call(addressfBQjGfT, uintD67vDuz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoineY9WjAY = await FreakCoin.new({from: accounts[0]});
		const addressACiPKbP = accounts[0]
		const addressJnCzaBg = accounts[3]
		const addressT919QMS = "0x0000000000000000000000000000000000000001"
		const uintQZnbMuv = BigInt("858")
		const addressXRlQBmv = accounts[0]
		const addressble5bq7 = accounts[2]
		const addresspnxOxEO = accounts[4]
		const uint256vBAqxA = await FreakCoineY9WjAY.allUserBalances.call(addressACiPKbP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Af2X8pt = await FreakCoineY9WjAY.allowance.call(addressT919QMS, addressJnCzaBg, {from: accounts[0]});
		const boolJKMQH2T = await FreakCoineY9WjAY.transfer.call(addressXRlQBmv, uintQZnbMuv, {from: accounts[4]});
		const uint256nYHnodE = await FreakCoineY9WjAY.allowance.call(addresspnxOxEO, addressble5bq7, {from: accounts[2]});

		assert.equal(uint256Af2X8pt, BigInt("0"))
		await expect(FreakCoineY9WjAY.transfer.call(addressXRlQBmv, uintQZnbMuv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniJ20bTm = await FreakCoin.new({from: accounts[0]});
		const addressNCFxOPs = accounts[3]
		const uintTudOTwY = BigInt("1316")
		const addressDKEkYlv = accounts[3]
		const uintpKx9hAo = BigInt("440")
		const addressw0FJmav = accounts[2]
		const addressPfScHde = accounts[4]
		const addressdeY9HwV = await FreakCoiniJ20bTm.setUniswapAddress.call(addressNCFxOPs, {from: accounts[3]});
		const boolrNBQXyV = await FreakCoiniJ20bTm.approve.call(addressDKEkYlv, uintTudOTwY, {from: accounts[4]});
		const booluRyVJh8 = await FreakCoiniJ20bTm.transferFrom.call(addressPfScHde, addressw0FJmav, uintpKx9hAo, {from: accounts[4]});

		await expect(FreakCoiniJ20bTm.setUniswapAddress.call(addressNCFxOPs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinlAJgYYz = await FreakCoin.new({from: accounts[3]});
		const uintLf0ieZq = BigInt("1047")
		const addressy2RFXOO = accounts[1]
		const addressVkuiPjM = accounts[3]
		const addressPgc7HRJ = accounts[3]
		const addresstDCpECg = accounts[0]
		const booljBsTSvY = await FreakCoinlAJgYYz.approve.call(addressy2RFXOO, uintLf0ieZq, {from: accounts[1]});
		const uint256xkpvmc2 = await FreakCoinlAJgYYz.allowance.call(addressPgc7HRJ, addressVkuiPjM, {from: accounts[0]});
		const addressi8wpY1 = await FreakCoinlAJgYYz.setUniswapAddress.call(addresstDCpECg, {from: accounts[3]});

		assert.equal(booljBsTSvY, true)
		assert.equal(uint256xkpvmc2, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinSvg8pwR = await FreakCoin.new({from: accounts[1]});
		const uintfdL5lKc = BigInt("198")
		const address7g5Soi = accounts[1]
		const uintIXY8EqI = BigInt("73")
		const addresss97j2gY = "0x0000000000000000000000000000000000000001"
		const addressCq2Dei = accounts[1]
		const addressR9AeHyB = accounts[5]
		const boollA9Ycqv = await FreakCoinSvg8pwR.transfer.call(address7g5Soi, uintfdL5lKc, {from: accounts[1]});
		const boolAIYPP8S = await FreakCoinSvg8pwR.transferFrom.call(addressCq2Dei, addresss97j2gY, uintIXY8EqI, {from: accounts[2]});
		const uint256nsKwIYK = await FreakCoinSvg8pwR.balanceOf.call(addressR9AeHyB, {from: accounts[5]});

		assert.equal(boollA9Ycqv, true)
		await expect(FreakCoinSvg8pwR.transferFrom.call(addressCq2Dei, addresss97j2gY, uintIXY8EqI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})