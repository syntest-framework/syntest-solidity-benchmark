const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintA2Nm7Gv = BigInt("1653")
		const stringhJBMC3R = "NDh1ujdpBOJkHAreFgQgs1EEdxDN8XNRPTBvdbbbOwjAwFlOx"
		const stringJWu5iAt = "3jI4eI8GpJQYnIpqpyMirnj61oOExfPuwqXxBpiBv1RculfPuUHGuXEY"
		const uintcQ9I5K = BigInt("732")
		const TetherTokensgeHUCr = await TetherToken.new(uintA2Nm7Gv, stringhJBMC3R, stringJWu5iAt, uintcQ9I5K, {from: accounts[3]});
		const addressCpmCvHo = accounts[3]
		const addressqjdOntu = accounts[4]
		const addressXZ910OE = accounts[4]
		const uintgkwD06c = BigInt("410")
		const uintAuDk3pG = await TetherTokensgeHUCr.balanceOf.call(addressCpmCvHo, {from: accounts[4]});
		const uintjyLM3vl = await TetherTokensgeHUCr.balanceOf.call(addressqjdOntu, {from: accounts[5]});
		const addressPMXCE9H = await TetherTokensgeHUCr.deprecate.call(addressXZ910OE, {from: accounts[3]});
		const uintOuEkoMn = await TetherTokensgeHUCr.issue.call(uintgkwD06c, {from: accounts[1]});

		assert.equal(uintAuDk3pG, BigInt("1653"))
		assert.equal(uintjyLM3vl, BigInt("0"))
		await expect(TetherTokensgeHUCr.issue.call(uintgkwD06c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint2GvT9d = BigInt("1183")
		const stringc7DaBoz = "OiYvvRlnQe2hN0OtjqOEDSq4jTOO1jtgoOmrtGn5TDICegHh6e8iIrbwPglEIxGYq36Jd46fO9S6rfXFNrbiHX5"
		const stringNakRhlh = "viRn9uG19tycDOPRkAfdeR971Gyf4Qt1z6J3ir5zpUmFE8EIgUeCBNGxIR1"
		const uintiJN0Q6 = BigInt("1665")
		const TetherTokenRkBVmTF = await TetherToken.new(uint2GvT9d, stringc7DaBoz, stringNakRhlh, uintiJN0Q6, {from: accounts[3]});
		const address59kHGz = accounts[3]
		const addressqVaUgHW = accounts[2]
		const uintKoPJi4z = BigInt("692")
		const addressOXDgda = accounts[1]
		const uintrpxyev7 = await TetherTokenRkBVmTF.allowance.call(addressqVaUgHW, address59kHGz, {from: accounts[5]});
		const addresse4hT5ZE = await TetherTokenRkBVmTF.transfer.call(addressOXDgda, uintKoPJi4z, {from: "0x0000000000000000000000000000000000000001"});
		const uintxwclujl = await TetherTokenRkBVmTF.totalSupply.call({from: accounts[0]});

		assert.equal(uintrpxyev7, BigInt("0"))
		await expect(TetherTokenRkBVmTF.transfer.call(addressOXDgda, uintKoPJi4z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintRJJdqF = BigInt("809")
		const stringbe1zMAf = "ikSw68zQRZN4WQLf9BmhcAwtSKjwalUQNPj9jlq2lSFojMjJT5qmez"
		const stringttBAIGT = "1YDZfQmGZWO37zrDBVALffZsLE"
		const uintq6osBRX = BigInt("24")
		const TetherTokenJrQynjj = await TetherToken.new(uintRJJdqF, stringbe1zMAf, stringttBAIGT, uintq6osBRX, {from: accounts[1]});
		const uintcM7S4jh = BigInt("1809")
		const addressqHx5nN = accounts[2]
		const uintlcLqTf0 = BigInt("241")
		const uintno4Khy = BigInt("714")
		const uintX6u6Um = BigInt("613")
		const uintpqIttDp = BigInt("73")
		const uintnqkMct = BigInt("1880")
		const addressHGUVGtK = await TetherTokenJrQynjj.approve.call(addressqHx5nN, uintcM7S4jh, {from: accounts[1]});
		const uintm5BFH2E = await TetherTokenJrQynjj.issue.call(uintlcLqTf0, {from: accounts[0]});
		const uintWp3jM2v = await TetherTokenJrQynjj.setParams.call(uintX6u6Um, uintno4Khy, {from: accounts[3]});
		const uintK4hPRtn = await TetherTokenJrQynjj.redeem.call(uintpqIttDp, {from: accounts[4]});
		const uintjzvklf7 = await TetherTokenJrQynjj.redeem.call(uintnqkMct, {from: accounts[5]});

		await expect(TetherTokenJrQynjj.issue.call(uintlcLqTf0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJCyydHi = BigInt("2003")
		const stringYHiGvbw = "tw1QTJXIrwoRELkfeRHMQuXU3U9dId1O1RmiWLHPbnmm611Dv3arltup992PjkCngCd"
		const stringL0e9QoJ = "4ysX3roEj3iOe5AvjRQ4mNPnDkriEjMyP"
		const uintcPG7Uza = BigInt("1287")
		const TetherTokenrXK2dxZ = await TetherToken.new(uintJCyydHi, stringYHiGvbw, stringL0e9QoJ, uintcPG7Uza, {from: "0x0000000000000000000000000000000000000001"});
		const uintcHngers = BigInt("2031")
		const addressKDp0kjP = accounts[5]
		const addressQiiVrCy = accounts[2]
		const addressozsml05 = await TetherTokenrXK2dxZ.transferFrom.call(addressQiiVrCy, addressKDp0kjP, uintcHngers, {from: accounts[0]});
		const uintaMxKpmr = await TetherTokenrXK2dxZ.totalSupply.call({from: accounts[2]});
	});

	it('test for TetherToken', async () => {
		const uintaY1FWNy = BigInt("104")
		const stringql5140u = "BtsFzjb6mez4tUTejRn"
		const stringJ8O6Ni0 = "wcQ7z8biIczObEt3hFhvfWfGn8iEjL40ZFcgATMHxszLau6LtJckVorBIVSo66P2EiAAwy1s"
		const uintumbRzZ6 = BigInt("41")
		const TetherTokenGhru08B = await TetherToken.new(uintaY1FWNy, stringql5140u, stringJ8O6Ni0, uintumbRzZ6, {from: accounts[1]});
		const uintzPwM85w = BigInt("778")
		const addressayKC7DY = accounts[4]
		const addressnvzmJS6 = accounts[1]
		const uintX2FtxUV = BigInt("1938")
		const addressmFL33n = accounts[3]
		const addressaBNXoYB = accounts[2]
		const addresszjKzGer = await TetherTokenGhru08B.transferFrom.call(addressnvzmJS6, addressayKC7DY, uintzPwM85w, {from: accounts[0]});
		const addresseY5IJ6T = await TetherTokenGhru08B.transferFrom.call(addressaBNXoYB, addressmFL33n, uintX2FtxUV, {from: accounts[4]});
		const uinttWeOTGl = await TetherTokenGhru08B.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenGhru08B.transferFrom.call(addressnvzmJS6, addressayKC7DY, uintzPwM85w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintNJiSOM9 = BigInt("1000")
		const stringhBkSXxZ = "5LVWKMHi5oV9jxP9QcQ5awsTSfgQZMyL7TeCtBY3a6p69JP2Vc2zIfWSaqy4Syai9soIW8SPfpM"
		const stringPB5uvL = "gKoPnPLmhyF4BJ1oMhEpDa4qRWr7zVvLOIY5RDOhEsbOUYG49tI"
		const uintiJNt1lF = BigInt("1232")
		const TetherTokenIssUW0D = await TetherToken.new(uintNJiSOM9, stringhBkSXxZ, stringPB5uvL, uintiJNt1lF, {from: accounts[3]});
		const uintYtvGLq = BigInt("712")
		const addressoXSCt5e = accounts[4]
		const addressbnv6xE7 = accounts[1]
		const uintYsMT7Ca = BigInt("969")
		const uintUQrnlHT = BigInt("448")
		const uintHfMzKhZ = BigInt("1623")
		const uinth9DuHX = BigInt("1930")
		const addressj3TlCc = await TetherTokenIssUW0D.approve.call(addressoXSCt5e, uintYtvGLq, {from: accounts[2]});
		const uintMCeYdib = await TetherTokenIssUW0D.balanceOf.call(addressbnv6xE7, {from: accounts[1]});
		const uintQ4qL4nV = await TetherTokenIssUW0D.setParams.call(uintUQrnlHT, uintYsMT7Ca, {from: accounts[1]});
		const uintP8Mp31S = await TetherTokenIssUW0D.setParams.call(uinth9DuHX, uintHfMzKhZ, {from: accounts[2]});

		assert.equal(uintMCeYdib, BigInt("0"))
		await expect(TetherTokenIssUW0D.setParams.call(uintUQrnlHT, uintYsMT7Ca, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGdg0Rco = BigInt("1183")
		const stringc7DaBoz = "OiYvvRlnQe2hN0OtjqOEDSq4jTOO1jtgoOmrtGn5TDICegHh6e8iIrbwPglEIxGYq36Jd46fO9S6rfXFNrbiHX5"
		const stringNakRhlh = "viRn9uG19tycDOPRkAfdeR971Gyf4Qt1z6J3ir5zpUmFE8EIgUeCBNGxIR1"
		const uintvDzxkfv = BigInt("1665")
		const TetherTokenRkBVmTF = await TetherToken.new(uintGdg0Rco, stringc7DaBoz, stringNakRhlh, uintvDzxkfv, {from: accounts[3]});
		const addressvrUuhzg = accounts[3]
		const addressgmXbg5k = accounts[2]
		const uintrpxyev7 = await TetherTokenRkBVmTF.allowance.call(addressgmXbg5k, addressvrUuhzg, {from: accounts[5]});
		const uintxwclujl = await TetherTokenRkBVmTF.totalSupply.call({from: accounts[0]});

		assert.equal(uintrpxyev7, BigInt("0"))
		assert.equal(uintxwclujl, BigInt("1183"))
	});

	it('test for TetherToken', async () => {
		const uintSJXiJ1 = BigInt("1183")
		const stringc7DaBoz = "OiYvvRlnQe2hN0OtjqOEDSq4jTOO1jtgoOmrtGn5TDICegHh6e8iIrbwPglEIxGYq36Jd46fO9S6rfXFNrbiHX5"
		const stringNakRhlh = "viRn9uG19tycDOPRkAfdeR971Gyf4Qt1z6J3ir5zpUmFE8EIgUeCBNGxIR1"
		const uintTikEMOd = BigInt("1665")
		const TetherTokenRkBVmTF = await TetherToken.new(uintSJXiJ1, stringc7DaBoz, stringNakRhlh, uintTikEMOd, {from: accounts[3]});
		const addressjM5ptdG = accounts[3]
		const address6C2tgE = accounts[2]
		const uintvGy5Ofd = BigInt("251")
		const addressOZamYEj = accounts[5]
		const addresscpzNJpw = accounts[4]
		const uintrpxyev7 = await TetherTokenRkBVmTF.allowance.call(address6C2tgE, addressjM5ptdG, {from: accounts[5]});
		const uintrMscf8i = await TetherTokenRkBVmTF.redeem.call(uintvGy5Ofd, {from: accounts[2]});
		const uintwuFOH4 = await TetherTokenRkBVmTF.allowance.call(addresscpzNJpw, addressOZamYEj, {from: accounts[2]});
		const uintxwclujl = await TetherTokenRkBVmTF.totalSupply.call({from: accounts[0]});

		assert.equal(uintrpxyev7, BigInt("0"))
		await expect(TetherTokenRkBVmTF.redeem.call(uintvGy5Ofd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBybcdom = BigInt("891")
		const stringqn1Xcy = "Do1bp7ADHMeYEG5Gfm1h2BPSac"
		const stringaZf4uwV = "VMs"
		const uintC3JIf6d = BigInt("721")
		const TetherTokenJKTm96Q = await TetherToken.new(uintBybcdom, stringqn1Xcy, stringaZf4uwV, uintC3JIf6d, {from: accounts[3]});
		const uintdC6AKw8 = BigInt("789")
		const uintjcHbnks = BigInt("778")
		const uint769Omp = BigInt("1682")
		const uintNNXT4A = await TetherTokenJKTm96Q.issue.call(uintdC6AKw8, {from: accounts[3]});
		const uintf7wMY8m = await TetherTokenJKTm96Q.issue.call(uintjcHbnks, {from: accounts[4]});
		const uintdfJzjT9 = await TetherTokenJKTm96Q.issue.call(uint769Omp, {from: accounts[1]});

		await expect(TetherTokenJKTm96Q.issue.call(uintjcHbnks, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinttHQJRR = BigInt("1183")
		const stringc7DaBoz = "OiYvvRlnQe2hN0OtjqOEDSq4jTOO1jtgoOmrtGn5TDICegHh6e8iIrbwPglEIxGYq36Jd46fO9S6rfXFNrbiHX5"
		const stringNakRhlh = "viRn9uG19tycDOPRkAfdeR971Gyf4Qt1z6J3ir5zpUmFE8EIgUeCBNGxIR1"
		const uintkdZdeLv = BigInt("1665")
		const TetherTokenRkBVmTF = await TetherToken.new(uinttHQJRR, stringc7DaBoz, stringNakRhlh, uintkdZdeLv, {from: accounts[3]});
		const addresseCycIQM = accounts[1]
		const uintMcYYQg2 = BigInt("1858")
		const uintNoOPQWX = BigInt("639")
		const addressGFsSZaJ = accounts[3]
		const addressswhTCk = accounts[3]
		const uintgj9Qpla = await TetherTokenRkBVmTF.balanceOf.call(addresseCycIQM, {from: accounts[3]});
		const uintEIx9Pu0 = await TetherTokenRkBVmTF.setParams.call(uintNoOPQWX, uintMcYYQg2, {from: accounts[3]});
		const uintSNBFZaV = await TetherTokenRkBVmTF.totalSupply.call({from: accounts[2]});
		const uintrpxyev7 = await TetherTokenRkBVmTF.allowance.call(addressswhTCk, addressGFsSZaJ, {from: accounts[5]});
		const uintxwclujl = await TetherTokenRkBVmTF.totalSupply.call({from: accounts[0]});

		assert.equal(uintgj9Qpla, BigInt("0"))
		await expect(TetherTokenRkBVmTF.setParams.call(uintNoOPQWX, uintMcYYQg2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlizl6C = BigInt("1000")
		const stringhBkSXxZ = "5LVWKMHi5oV9jxP9QcQ5awsTSfgQZMyL7TeCtBY3a6p69JP2Vc2zIfWSaqy4Syai9soIW8SPfpM"
		const stringPB5uvL = "gKoPnPLmhyF4BJ1oMhEpDa4qRWr7zVvLOIY5RDOhEsbOUYG49tI"
		const uintsLVGuGU = BigInt("1232")
		const TetherTokenIssUW0D = await TetherToken.new(uintlizl6C, stringhBkSXxZ, stringPB5uvL, uintsLVGuGU, {from: accounts[3]});
		const uintFh7qed3 = BigInt("315")
		const uintJxYvBAD = BigInt("1746")
		const uintHkhC6bm = await TetherTokenIssUW0D.redeem.call(uintFh7qed3, {from: accounts[3]});
		const uintCS69H7x = await TetherTokenIssUW0D.redeem.call(uintJxYvBAD, {from: accounts[4]});

		await expect(TetherTokenIssUW0D.redeem.call(uintJxYvBAD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})