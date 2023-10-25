const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractdmhyEKz = await DingoInu.new({from: accounts[0]});
		const tokens3jCkez = BigInt("279")
		const toqk1XcIL = accounts[2]
		const tokenOwnervy5fQiC = accounts[5]
		const tokensEFk9scK = BigInt("786")
		const toJu5wYPE = "0x0000000000000000000000000000000000000001"
		const fromL6eJrWw = accounts[1]
		const spendergMHtcHw = accounts[2]
		const tokenOwnerPsckVtJ = accounts[5]
		const successj2pNJu = await contractdmhyEKz.transfer.call(toqk1XcIL, tokens3jCkez, {from: accounts[4]});
		const balanceEfovv98 = await contractdmhyEKz.balanceOf.call(tokenOwnervy5fQiC, {from: accounts[0]});
		const successxKOhFtG = await contractdmhyEKz.transferFrom.call(fromL6eJrWw, toJu5wYPE, tokensEFk9scK, {from: accounts[4]});
		const remainingMCaIXBk = await contractdmhyEKz.allowance.call(tokenOwnerPsckVtJ, spendergMHtcHw, {from: accounts[0]});
		const nullNUomU47 = await contractdmhyEKz.totalSupply.call({from: accounts[4]});

		await expect(contractdmhyEKz.transfer.call(toqk1XcIL, tokens3jCkez, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractNWiR2iv = await DingoInu.new({from: accounts[4]});
		const tokenOwnerNPB8S5e = accounts[5]
		const tokenOwnerzNgHUtf = "0x0000000000000000000000000000000000000001"
		const nullV8SBXmi = await contractNWiR2iv.totalSupply.call({from: accounts[0]});
		const balanceTNCXvZ = await contractNWiR2iv.balanceOf.call(tokenOwnerNPB8S5e, {from: accounts[1]});
		const balanceuAOOopl = await contractNWiR2iv.balanceOf.call(tokenOwnerzNgHUtf, {from: accounts[2]});

		assert.equal(balanceTNCXvZ, 0)
		assert.equal(balanceuAOOopl, 0)
		assert.equal(nullV8SBXmi, 1000000000000000000000000000000)
	});

	it('test for DingoInu', async () => {
		const contractBZTUQ9H = await DingoInu.new({from: accounts[5]});
		const tokensqshOKbC = BigInt("1747")
		const spenderEP2D1Oz = accounts[2]
		const spenderpg3aTFG = accounts[4]
		const tokenOwnerChJznYd = accounts[3]
		const successpJAnO7 = await contractBZTUQ9H.approve.call(spenderEP2D1Oz, tokensqshOKbC, {from: accounts[5]});
		const remainingdnM0Itc = await contractBZTUQ9H.allowance.call(tokenOwnerChJznYd, spenderpg3aTFG, {from: accounts[2]});

		assert.equal(remainingdnM0Itc, 0)
		assert.equal(successpJAnO7, true)
	});

	it('test for DingoInu', async () => {
		const contractBx1UX9X = await DingoInu.new({from: accounts[0]});
		const tokensNwBEhfq = BigInt("283")
		const spenderyLkfpoS = accounts[5]
		const spenderBwwX6Z = accounts[0]
		const tokenOwnertSuM8Vx = accounts[2]
		const tokensJm9GDnC = BigInt("1447")
		const toASo2GGa = accounts[2]
		const fromg75UZ8c = accounts[2]
		const successH97NTmZ = await contractBx1UX9X.approve.call(spenderyLkfpoS, tokensNwBEhfq, {from: accounts[5]});
		const remainingG863dx3 = await contractBx1UX9X.allowance.call(tokenOwnertSuM8Vx, spenderBwwX6Z, {from: accounts[3]});
		const successXsFQYMU = await contractBx1UX9X.transferFrom.call(fromg75UZ8c, toASo2GGa, tokensJm9GDnC, {from: accounts[1]});

		assert.equal(remainingG863dx3, 0)
		assert.equal(successH97NTmZ, true)
		await expect(contractBx1UX9X.transferFrom.call(fromg75UZ8c, toASo2GGa, tokensJm9GDnC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractU6HFFm0 = await DingoInu.new({from: accounts[5]});
		const tokensYmf0qq9 = BigInt("1747")
		const spenderSk8SVvw = accounts[2]
		const tokensM1BQFJI = BigInt("695")
		const toF365wCR = accounts[3]
		const spenderwcp6rQX = accounts[5]
		const tokenOwnerrx6aDio = accounts[3]
		const tokensU4Vyy63 = BigInt("1096")
		const toiIiLHjc = accounts[5]
		const successLhi9k7z = await contractU6HFFm0.approve.call(spenderSk8SVvw, tokensYmf0qq9, {from: accounts[5]});
		const successuGktFo0 = await contractU6HFFm0.transfer.call(toF365wCR, tokensM1BQFJI, {from: accounts[5]});
		const remainingaW0gNKP = await contractU6HFFm0.allowance.call(tokenOwnerrx6aDio, spenderwcp6rQX, {from: accounts[2]});
		const successZqnDfn = await contractU6HFFm0.transfer.call(toiIiLHjc, tokensU4Vyy63, {from: accounts[0]});

		assert.equal(remainingaW0gNKP, 0)
		assert.equal(successLhi9k7z, true)
		assert.equal(successuGktFo0, true)
		await expect(contractU6HFFm0.transfer.call(toiIiLHjc, tokensU4Vyy63, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractYvm1dTk = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensYSou0BQ = BigInt("1563")
		const spenderPYdzz9l = accounts[5]
		const tokenOwnertzJ1FL = accounts[3]
		const spenderdyBM9Tm = accounts[0]
		const tokenOwnerQOB8i0e = accounts[3]
		const successzTkDIug = await contractYvm1dTk.approve.call(spenderPYdzz9l, tokensYSou0BQ, {from: accounts[2]});
		const balance5Cp4m4 = await contractYvm1dTk.balanceOf.call(tokenOwnertzJ1FL, {from: accounts[1]});
		const remainingq3ZCtoy = await contractYvm1dTk.allowance.call(tokenOwnerQOB8i0e, spenderdyBM9Tm, {from: accounts[5]});
	});
})