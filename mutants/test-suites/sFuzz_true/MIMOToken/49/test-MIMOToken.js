const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokeniqkTCx7 = await MIMOToken.new({from: accounts[3]});
		const uintQbG0zzN = BigInt("245")
		const addressubySPn = accounts[3]
		const uinttRrVzgy = BigInt("1214")
		const addressxLieK6H = accounts[0]
		const uintpbArunl = BigInt("14")
		const addressxejEPMf = accounts[3]
		const addressTNHTked = accounts[3]
		const addressKvkvIib = accounts[3]
		const addressqrdMLq = accounts[3]
		const addressuTMzYHk = accounts[2]
		const uintFuprPn = BigInt("359")
		const addresswseGi7u = accounts[4]
		const booleJR5reJ = await MIMOTokeniqkTCx7.approve.call(addressubySPn, uintQbG0zzN, {from: accounts[3]});
//		const boolcuNCS7N = await MIMOTokeniqkTCx7.transfer.call(addressxLieK6H, uinttRrVzgy, {from: accounts[1]});
//		const boolaFDWPSW = await MIMOTokeniqkTCx7.transferFrom.call(addressTNHTked, addressxejEPMf, uintpbArunl, {from: accounts[0]});
//		const uintoZLmBHm = await MIMOTokeniqkTCx7.allowance.call(addressqrdMLq, addressKvkvIib, {from: "0x0000000000000000000000000000000000000001"});
//		const uintw6r1K9T = await MIMOTokeniqkTCx7.balanceOf.call(addressuTMzYHk, {from: accounts[2]});
//		const booloG8Kkl3 = await MIMOTokeniqkTCx7.transfer.call(addresswseGi7u, uintFuprPn, {from: accounts[3]});

		assert.equal(booleJR5reJ, true)
		await expect(MIMOTokeniqkTCx7.transfer.call(addressxLieK6H, uinttRrVzgy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjqEsecp = await MIMOToken.new({from: accounts[0]});
		const addressMmXBeip = accounts[0]
		const addressuXdaF5q = accounts[2]
		const uintECWxV4a = BigInt("385")
		const uintCF69sI2 = BigInt("1868")
		const addressUK07ocs = accounts[1]
		const addressmuMEc0u = "0x0000000000000000000000000000000000000001"
		const addressiZQbRgz = accounts[4]
		const uintwKjwfur = BigInt("1015")
		const uintA3LmdxA = BigInt("331")
		const addressmtQ2IzD = accounts[2]
		const addressxCHGELB = accounts[0]
		const uintbA19736 = await MIMOTokenjqEsecp.allowance.call(addressuXdaF5q, addressMmXBeip, {from: accounts[4]});
		const uint256QnSJhsF = await MIMOTokenjqEsecp.setFeeRate.call(uintECWxV4a, {from: accounts[4]});
		const boollggLLhF = await MIMOTokenjqEsecp.approve.call(addressUK07ocs, uintCF69sI2, {from: accounts[2]});
		const uintmVwqJk7 = await MIMOTokenjqEsecp.allowance.call(addressiZQbRgz, addressmuMEc0u, {from: accounts[1]});
		const uint256VPTN96y = await MIMOTokenjqEsecp.setFeeRate.call(uintwKjwfur, {from: accounts[4]});
//		const boolKlM86ez = await MIMOTokenjqEsecp.transferFrom.call(addressxCHGELB, addressmtQ2IzD, uintA3LmdxA, {from: accounts[1]});

		assert.equal(boollggLLhF, true)
		assert.equal(uintbA19736, BigInt("0"))
		assert.equal(uintmVwqJk7, BigInt("0"))
		await expect(MIMOTokenjqEsecp.transferFrom.call(addressxCHGELB, addressmtQ2IzD, uintA3LmdxA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensL67AIU = await MIMOToken.new({from: accounts[1]});
		const uintxbagPLm = BigInt("2000")
		const addresscAoKzrx = accounts[4]
		const uintWmYAzkP = BigInt("308")
		const addressrOHg24a = "0x0000000000000000000000000000000000000001"
		const uint256kXoOYeL = await MIMOTokensL67AIU.setFeeRate.call(uintxbagPLm, {from: accounts[3]});
		const uintA6mz35V = await MIMOTokensL67AIU.totalSupply.call({from: accounts[0]});
		const uintGV6J7K = await MIMOTokensL67AIU.balanceOf.call(addresscAoKzrx, {from: accounts[0]});
		const uintUKXvjzV = await MIMOTokensL67AIU.totalSupply.call({from: accounts[3]});
//		const boolJzrQQrN = await MIMOTokensL67AIU.transfer.call(addressrOHg24a, uintWmYAzkP, {from: accounts[2]});

		assert.equal(uintA6mz35V, BigInt("16000000000000000000000000"))
		assert.equal(uintGV6J7K, BigInt("0"))
		assert.equal(uintUKXvjzV, BigInt("16000000000000000000000000"))
		await expect(MIMOTokensL67AIU.transfer.call(addressrOHg24a, uintWmYAzkP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenvOGgNe9 = await MIMOToken.new({from: accounts[1]});
		const uinthLJnbo4 = BigInt("559")
		const addressPTunj3d = accounts[5]
		const uintTrEYxpf = BigInt("2025")
		const uint256eRQvrHh = await MIMOTokenvOGgNe9.getFee.call(uinthLJnbo4, {from: accounts[3]});
		const uintWWdWmYI = await MIMOTokenvOGgNe9.balanceOf.call(addressPTunj3d, {from: accounts[2]});
		const uint256ta7ByNf = await MIMOTokenvOGgNe9.setMinFee.call(uintTrEYxpf, {from: accounts[4]});

		assert.equal(uint256eRQvrHh, BigInt("50000000000000000"))
		assert.equal(uintWWdWmYI, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensL67AIU = await MIMOToken.new({from: accounts[1]});
		const uintLr7NICG = BigInt("2000")
		const addressGfULmVX = accounts[4]
		const addresskoTUcfR = accounts[1]
		const addressCxRbzlt = accounts[2]
		const uintCiMsPJh = BigInt("1652")
		const uintOHjlDy = BigInt("308")
		const addressdnD6ulR = "0x0000000000000000000000000000000000000000"
		const uint256kXoOYeL = await MIMOTokensL67AIU.setFeeRate.call(uintLr7NICG, {from: accounts[3]});
		const uintA6mz35V = await MIMOTokensL67AIU.totalSupply.call({from: accounts[0]});
		const uintGV6J7K = await MIMOTokensL67AIU.balanceOf.call(addressGfULmVX, {from: accounts[0]});
		const uintLOpVbPJ = await MIMOTokensL67AIU.allowance.call(addressCxRbzlt, addresskoTUcfR, {from: accounts[2]});
		const uintUKXvjzV = await MIMOTokensL67AIU.totalSupply.call({from: accounts[3]});
		const uint256Gq8460O = await MIMOTokensL67AIU.setFeeRate.call(uintCiMsPJh, {from: accounts[5]});
//		const boolJzrQQrN = await MIMOTokensL67AIU.transfer.call(addressdnD6ulR, uintOHjlDy, {from: accounts[2]});

		assert.equal(uintA6mz35V, BigInt("16000000000000000000000000"))
		assert.equal(uintGV6J7K, BigInt("0"))
		assert.equal(uintLOpVbPJ, BigInt("0"))
		assert.equal(uintUKXvjzV, BigInt("16000000000000000000000000"))
		await expect(MIMOTokensL67AIU.transfer.call(addressdnD6ulR, uintOHjlDy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenn3W702p = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVDnzkIv = accounts[5]
		const addressL9mwAe = accounts[5]
		const address9xtRJi = accounts[3]
		const addressQjgPzq = accounts[3]
		const addressYPRRMhl = accounts[3]
		const uintwdHyFiQ = await MIMOTokenn3W702p.balanceOf.call(addressVDnzkIv, {from: accounts[3]});
		const uintRPOHZ8N = await MIMOTokenn3W702p.allowance.call(address9xtRJi, addressL9mwAe, {from: accounts[3]});
		const uintJwVp0sK = await MIMOTokenn3W702p.allowance.call(addressYPRRMhl, addressQjgPzq, {from: accounts[3]});
	});
})