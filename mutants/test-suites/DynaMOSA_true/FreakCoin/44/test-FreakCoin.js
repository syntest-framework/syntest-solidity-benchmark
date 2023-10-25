const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoind75qvf = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFUdTaBp = accounts[0]
		const addressMxRALgi = accounts[1]
		const addressHOz7Amt = await FreakCoind75qvf.uniswapAddress.call({from: accounts[2]});
		const uint256NVTb0S7 = await FreakCoind75qvf.balanceOf.call(addressFUdTaBp, {from: accounts[2]});
		const uint256s5uIAJb = await FreakCoind75qvf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVMgoq1f = await FreakCoind75qvf.uniswapAddress.call({from: accounts[3]});
		const addressdCgeOAu = await FreakCoind75qvf.uniswapAddress.call({from: accounts[2]});
		const uint256iyuXYb5 = await FreakCoind75qvf.allUserBalances.call(addressMxRALgi, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOeflmkA = await FreakCoin.new({from: accounts[4]});
		const addressSjDbR3J = accounts[0]
		const addressSAaYDeC = accounts[3]
		const addressjm7emNV = accounts[0]
		const addressZQtv1Ox = accounts[2]
//		const uint256txp2fvz = await FreakCoinOeflmkA.allUserBalances.call(addressSjDbR3J, {from: accounts[3]});
//		const uint256abmsdlN = await FreakCoinOeflmkA.allUserBalances.call(addressSAaYDeC, {from: accounts[1]});
//		const uint256EMkO8k = await FreakCoinOeflmkA.allowance.call(addressZQtv1Ox, addressjm7emNV, {from: accounts[3]});

		await expect(FreakCoinOeflmkA.allUserBalances.call(addressSjDbR3J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIVveBXg = await FreakCoin.new({from: accounts[4]});
		const uintNcb36D9 = BigInt("622")
		const addresseGCZwbJ = accounts[1]
		const uintRAIHtj1 = BigInt("262")
		const addressI0X6ANB = accounts[4]
		const addressmVZaCCc = await FreakCoinIVveBXg.uniswapAddress.call({from: accounts[2]});
//		const boolvCcaymi = await FreakCoinIVveBXg.transfer.call(addresseGCZwbJ, uintNcb36D9, {from: accounts[5]});
//		const boolUstzsuz = await FreakCoinIVveBXg.transfer.call(addressI0X6ANB, uintRAIHtj1, {from: accounts[4]});

		assert.equal(addressmVZaCCc, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinIVveBXg.transfer.call(addresseGCZwbJ, uintNcb36D9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinFdLUIr = await FreakCoin.new({from: accounts[1]});
		const uintzQszAf6 = BigInt("1117")
		const addressaYOH9V = "0x0000000000000000000000000000000000000001"
		const addressmJXHoSw = accounts[2]
		const addresssI4f2cA = accounts[4]
		const uintZd2g5dE = BigInt("1283")
		const addressA3pJ2r1 = accounts[4]
		const address4B82Mi = accounts[2]
		const addressYOsquMl = await FreakCoinFdLUIr.uniswapAddress.call({from: accounts[2]});
		const boolcoR0OH = await FreakCoinFdLUIr.approve.call(addressaYOH9V, uintzQszAf6, {from: accounts[2]});
//		const uint256PHkF1G7 = await FreakCoinFdLUIr.allUserBalances.call(addressmJXHoSw, {from: accounts[2]});
//		const addressSA75yGa = await FreakCoinFdLUIr.setUniswapAddress.call(addresssI4f2cA, {from: accounts[0]});
//		const boolZizcOZK = await FreakCoinFdLUIr.transferFrom.call(address4B82Mi, addressA3pJ2r1, uintZd2g5dE, {from: accounts[1]});
//		const addresshPbc2AA = await FreakCoinFdLUIr.uniswapAddress.call({from: accounts[3]});

		assert.equal(addressYOsquMl, 0x0000000000000000000000000000000000000000)
		assert.equal(boolcoR0OH, true)
		await expect(FreakCoinFdLUIr.allUserBalances.call(addressmJXHoSw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinn9zAHIQ = await FreakCoin.new({from: accounts[3]});
		const uintdXMOS3B = BigInt("1276")
		const addressRXLTxwg = accounts[4]
		const addresstdKWeAb = accounts[1]
		const addresseuuUUX = accounts[0]
//		const boolonTmVPI = await FreakCoinn9zAHIQ.transferFrom.call(addresstdKWeAb, addressRXLTxwg, uintdXMOS3B, {from: accounts[4]});
//		const uint256qgWFTi2 = await FreakCoinn9zAHIQ.allUserBalances.call(addresseuuUUX, {from: accounts[3]});

		await expect(FreakCoinn9zAHIQ.transferFrom.call(addresstdKWeAb, addressRXLTxwg, uintdXMOS3B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIVveBXg = await FreakCoin.new({from: accounts[4]});
		const uintp4L4UE = BigInt("262")
		const addressSgJSZ45 = accounts[4]
		const uint7HAJ8t = BigInt("1483")
		const addressM6Ocgbe = accounts[2]
		const addressmVZaCCc = await FreakCoinIVveBXg.uniswapAddress.call({from: accounts[2]});
		const boolUstzsuz = await FreakCoinIVveBXg.transfer.call(addressSgJSZ45, uintp4L4UE, {from: accounts[4]});
//		const boolxC8Sd5S = await FreakCoinIVveBXg.transfer.call(addressM6Ocgbe, uint7HAJ8t, {from: accounts[1]});

		assert.equal(addressmVZaCCc, 0x0000000000000000000000000000000000000000)
		assert.equal(boolUstzsuz, true)
		await expect(FreakCoinIVveBXg.transfer.call(addressM6Ocgbe, uint7HAJ8t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNrsQ8bP = await FreakCoin.new({from: accounts[5]});
		const addresswszdz63 = accounts[2]
		const addressprLnOwV = accounts[1]
		const address8aMzEo = accounts[4]
		const addressnGboHZ = accounts[0]
		const uint256FcIppjV = await FreakCoinNrsQ8bP.allowance.call(addressprLnOwV, addresswszdz63, {from: accounts[4]});
		const addressIq7Tim8 = await FreakCoinNrsQ8bP.uniswapAddress.call({from: accounts[0]});
		const addressqhP51ea = await FreakCoinNrsQ8bP.uniswapAddress.call({from: accounts[2]});
		const uint256iDv4upX = await FreakCoinNrsQ8bP.allowance.call(addressnGboHZ, address8aMzEo, {from: accounts[0]});

		assert.equal(addressIq7Tim8, 0x0000000000000000000000000000000000000000)
		assert.equal(addressqhP51ea, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256FcIppjV, BigInt("0"))
		assert.equal(uint256iDv4upX, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinn9zAHIQ = await FreakCoin.new({from: accounts[3]});
		const addressZp0miDi = accounts[0]
		const addresshqvjLf = accounts[1]
		const uintfVtnvRt = BigInt("1276")
		const addressYI9C5dq = accounts[5]
		const address6khq8Y = accounts[1]
		const addressHv9XbFd = accounts[0]
//		const addressK5YczHe = await FreakCoinn9zAHIQ.setUniswapAddress.call(addressZp0miDi, {from: accounts[1]});
//		const uint256s8V4Inw = await FreakCoinn9zAHIQ.balanceOf.call(addresshqvjLf, {from: accounts[5]});
//		const boolonTmVPI = await FreakCoinn9zAHIQ.transferFrom.call(address6khq8Y, addressYI9C5dq, uintfVtnvRt, {from: accounts[4]});
//		const uint256qgWFTi2 = await FreakCoinn9zAHIQ.allUserBalances.call(addressHv9XbFd, {from: accounts[3]});

		await expect(FreakCoinn9zAHIQ.setUniswapAddress.call(addressZp0miDi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIVveBXg = await FreakCoin.new({from: accounts[4]});
		const uintVl3vXf3 = BigInt("262")
		const addressoaqYOrq = accounts[5]
		const uintsUzu29w = BigInt("1483")
		const addressi3glNEP = accounts[2]
		const addressJQHxNfz = accounts[2]
		const boolUstzsuz = await FreakCoinIVveBXg.transfer.call(addressoaqYOrq, uintVl3vXf3, {from: accounts[4]});
//		const boolxC8Sd5S = await FreakCoinIVveBXg.transfer.call(addressi3glNEP, uintsUzu29w, {from: accounts[1]});
//		const addressNQ1QoM7 = await FreakCoinIVveBXg.setUniswapAddress.call(addressJQHxNfz, {from: accounts[4]});

		assert.equal(boolUstzsuz, true)
		await expect(FreakCoinIVveBXg.transfer.call(addressi3glNEP, uintsUzu29w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzI12Qat = await FreakCoin.new({from: accounts[5]});
		const addresslsR1uB = accounts[2]
		const addresssIwwys8 = accounts[3]
		const addressxrRVbH0 = accounts[1]
		const addressSoSGEr = accounts[2]
		const addressU32Yky = accounts[0]
		const uint256MVWiouZ = await FreakCoinzI12Qat.allowance.call(addresssIwwys8, addresslsR1uB, {from: accounts[5]});
		const uint256Hkkttcc = await FreakCoinzI12Qat.balanceOf.call(addressxrRVbH0, {from: accounts[4]});
		const uint256zgk7DBO = await FreakCoinzI12Qat.balanceOf.call(addressSoSGEr, {from: accounts[1]});
		const addressE7Oxtl = await FreakCoinzI12Qat.uniswapAddress.call({from: accounts[1]});
		const addressz2UYeGJ = await FreakCoinzI12Qat.setUniswapAddress.call(addressU32Yky, {from: accounts[5]});

		assert.equal(addressE7Oxtl, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256Hkkttcc, BigInt("0"))
		assert.equal(uint256MVWiouZ, BigInt("0"))
		assert.equal(uint256zgk7DBO, BigInt("0"))
	});
})