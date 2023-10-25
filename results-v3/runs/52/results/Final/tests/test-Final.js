const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringRomw6Ng = "1pVnqiRuu852r"
		const stringygOqMtg = "PXeGEq"
		const uintN0jq3bq = BigInt("1585")
		const FinalKS1sHpH = await Final.new(stringRomw6Ng, stringygOqMtg, uintN0jq3bq, {from: accounts[2]});
		const uintPxpqhqS = BigInt("148")
		const addressFZnUANp = accounts[2]
		const addressq2UD2iM = "0x0000000000000000000000000000000000000001"
		const addressfRMrWEW = accounts[3]
		const uintHF3QHV3 = BigInt("1445")
		const addresspQXBAVg = "0x0000000000000000000000000000000000000001"
		const uintwgjLkH8 = BigInt("1824")
		const addressYhyLp0v = accounts[3]
		const uintiSYcZBp = BigInt("345")
		const addresscohvZOC = accounts[0]
		const uintqxgQUr1 = BigInt("196")
		const addressj8QNxDC = accounts[2]
		const bool6otElq = await FinalKS1sHpH.transfer.call(addressFZnUANp, uintPxpqhqS, {from: accounts[1]});
		const uintVVXdEq9 = await FinalKS1sHpH.allowance.call(addressfRMrWEW, addressq2UD2iM, {from: accounts[0]});
		const booliHdWbuT = await FinalKS1sHpH.approve.call(addresspQXBAVg, uintHF3QHV3, {from: accounts[2]});
		const boolnBbhDRI = await FinalKS1sHpH.approve.call(addressYhyLp0v, uintwgjLkH8, {from: accounts[2]});
		const boolUkNBJnm = await FinalKS1sHpH.transfer.call(addresscohvZOC, uintiSYcZBp, {from: accounts[0]});
		const boolmCJb7Xw = await FinalKS1sHpH.approve.call(addressj8QNxDC, uintqxgQUr1, {from: accounts[3]});

		await expect(FinalKS1sHpH.transfer.call(addressFZnUANp, uintPxpqhqS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string5WBc41 = "n53f"
		const stringbvNlzcU = "OvmBJ37FHc21M8ByOjLFj1zVukcXGm4tJghlbudnEWW1q8zBQRgwBTvJMOk2GCdlo1nrtaek3uhgP3MfKYmIDSM"
		const uintGFxTrMW = BigInt("1845")
		const FinalmCaoRHS = await Final.new(string5WBc41, stringbvNlzcU, uintGFxTrMW, {from: accounts[5]});
		const addressndi9T0F = accounts[1]
		const addresshtasjl1 = accounts[3]
		const uintVosgQhU = BigInt("1801")
		const addressMB3NLlv = accounts[5]
		const uintvo4kNo = await FinalmCaoRHS.balanceOf.call(addressndi9T0F, {from: accounts[0]});
		const uintsyLvrF = await FinalmCaoRHS.balanceOf.call(addresshtasjl1, {from: accounts[5]});
		const boolKUMSAHt = await FinalmCaoRHS.approve.call(addressMB3NLlv, uintVosgQhU, {from: accounts[4]});

		assert.equal(boolKUMSAHt, true)
		assert.equal(uintsyLvrF, BigInt("0"))
		assert.equal(uintvo4kNo, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringm5mlJsr = "Pd5XbbSSbjV"
		const stringBnHM3W = "VPaz3hYqiXXtHVn6xfEhh4I4l4hk1jNmzlf2RHIcYlsKrgbdhi1loDqhG9G"
		const uintLlWCVGP = BigInt("19")
		const Finalmeu6QQE = await Final.new(stringm5mlJsr, stringBnHM3W, uintLlWCVGP, {from: accounts[3]});
		const addressdZORFs = accounts[0]
		const uintyFSD1IM = BigInt("515")
		const addressDO0WfVV = accounts[1]
		const addresstJh25hJ = accounts[1]
		const addressKtZF2ET = "0x0000000000000000000000000000000000000001"
		const uintFXNhhK = await Finalmeu6QQE.balanceOf.call(addressdZORFs, {from: accounts[1]});
		const boolwW35Jlb = await Finalmeu6QQE.decreaseAllowance.call(addressDO0WfVV, uintyFSD1IM, {from: "0x0000000000000000000000000000000000000001"});
		const stringjxS9FS1 = await Finalmeu6QQE.symbol.call({from: accounts[5]});
		const stringaR3ghd3 = await Finalmeu6QQE.symbol.call({from: accounts[1]});
		const uintrzrXwNo = await Finalmeu6QQE.allowance.call(addressKtZF2ET, addresstJh25hJ, {from: accounts[0]});

		assert.equal(uintFXNhhK, BigInt("0"))
		await expect(Finalmeu6QQE.decreaseAllowance.call(addressDO0WfVV, uintyFSD1IM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringqduxhZ = "arT"
		const stringUHuD9yJ = "9nqizenPmI8CEWsrV6"
		const uintEXvH5dC = BigInt("1780")
		const FinalaUbVjqo = await Final.new(stringqduxhZ, stringUHuD9yJ, uintEXvH5dC, {from: accounts[1]});
		const uintyA6Y3zf = BigInt("1326")
		const addressAqExQpY = accounts[2]
		const uintnn8affm = BigInt("1617")
		const addresstxMQ0An = accounts[1]
		const addressr8cWQUd = accounts[3]
		const addressW6qELL = accounts[4]
		const boolwE2ubUM = await FinalaUbVjqo.transfer.call(addressAqExQpY, uintyA6Y3zf, {from: accounts[0]});
		const stringBoVNzW6 = await FinalaUbVjqo.symbol.call({from: accounts[0]});
		const boolJo1ZjFi = await FinalaUbVjqo.transferFrom.call(addressr8cWQUd, addresstxMQ0An, uintnn8affm, {from: accounts[2]});
		const uintvizjCmN = await FinalaUbVjqo.totalSupply.call({from: accounts[3]});
		const stringR7YnU3O = await FinalaUbVjqo.symbol.call({from: accounts[0]});
		const uintbSKr9z4 = await FinalaUbVjqo.balanceOf.call(addressW6qELL, {from: accounts[5]});

		await expect(FinalaUbVjqo.transfer.call(addressAqExQpY, uintyA6Y3zf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string5WBc41 = "n53f"
		const stringbvNlzcU = "OvmBJ37FHc21M8ByOjLFj1zVukcXGm4tJghlbudnEWW1q8zBQRgwBTvJMOk2GCdlo1nrtaek3uhgP3MfKYmIDSM"
		const uintpHbllx = BigInt("1845")
		const FinalmCaoRHS = await Final.new(string5WBc41, stringbvNlzcU, uintpHbllx, {from: accounts[5]});
		const addresstiBN2lO = accounts[1]
		const addresspXviCVt = accounts[3]
		const uintgi1juRK = BigInt("251")
		const addressTLffo2 = accounts[4]
		const uinthK01qfV = BigInt("1983")
		const addressOyWCbyK = accounts[4]
		const uintRYZxoE = BigInt("456")
		const addressvJxbxmP = accounts[1]
		const uintbPEq3vF = BigInt("1801")
		const addresssBMfnWm = accounts[5]
		const uintvo4kNo = await FinalmCaoRHS.balanceOf.call(addresstiBN2lO, {from: accounts[0]});
		const uintsyLvrF = await FinalmCaoRHS.balanceOf.call(addresspXviCVt, {from: accounts[5]});
		const boolRGB1vac = await FinalmCaoRHS.approveAndCall.call(addressTLffo2, uintgi1juRK, {from: accounts[3]});
		const boolXlrrMGQ = await FinalmCaoRHS.approve.call(addressOyWCbyK, uinthK01qfV, {from: accounts[0]});
		const boolecRLpVu = await FinalmCaoRHS.approveAndCall.call(addressvJxbxmP, uintRYZxoE, {from: accounts[4]});
		const boolKUMSAHt = await FinalmCaoRHS.approve.call(addresssBMfnWm, uintbPEq3vF, {from: accounts[4]});

		assert.equal(uintsyLvrF, BigInt("0"))
		assert.equal(uintvo4kNo, BigInt("0"))
		await expect(FinalmCaoRHS.approveAndCall.call(addressTLffo2, uintgi1juRK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string5WBc41 = "n53f"
		const stringbvNlzcU = "OvmBJ37FHc21M8ByOjLFj1zVukcXGm4tJghlbudnEWW1q8zBQRgwBTvJMOk2GCdlo1nrtaek3uhgP3MfKYmIDSM"
		const uintTvuJ1IQ = BigInt("1845")
		const FinalmCaoRHS = await Final.new(string5WBc41, stringbvNlzcU, uintTvuJ1IQ, {from: accounts[5]});
		const addressFsyBjCa = accounts[1]
		const addressvp7jh3L = accounts[4]
		const addressf4IUkbO = accounts[2]
		const addressXsM4H2x = accounts[4]
		const uintCeoN5MJ = BigInt("1801")
		const addresshCqKoc8 = accounts[5]
		const uintvo4kNo = await FinalmCaoRHS.balanceOf.call(addressFsyBjCa, {from: accounts[0]});
		const boolEb6xz7E = await FinalmCaoRHS.transferownership.call(addressvp7jh3L, {from: accounts[0]});
		const uinth8n5Tnb = await FinalmCaoRHS.balanceOf.call(addressf4IUkbO, {from: accounts[4]});
		const uintsyLvrF = await FinalmCaoRHS.balanceOf.call(addressXsM4H2x, {from: accounts[5]});
		const boolKUMSAHt = await FinalmCaoRHS.approve.call(addresshCqKoc8, uintCeoN5MJ, {from: accounts[4]});

		assert.equal(uintvo4kNo, BigInt("0"))
		await expect(FinalmCaoRHS.transferownership.call(addressvp7jh3L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringUCwQncc = "ZWsSvn7XMLVGfjVblqtQnoFROLnvooDDDDxmyqjvjeYeTzC5jScmPBoxteSz0XJ78JSO"
		const stringbLZfQUz = "O5wy1vmLXBrhRHx"
		const uintyShe4ZO = BigInt("200")
		const FinalRNOFZ24 = await Final.new(stringUCwQncc, stringbLZfQUz, uintyShe4ZO, {from: accounts[2]});
		const uinterc3i1x = BigInt("1167")
		const addressF6hcMag = "0x0000000000000000000000000000000000000001"
		const uintU9KnEXH = BigInt("1948")
		const address9vioFi = accounts[4]
		const boolRCZjdSl = await FinalRNOFZ24.approveAndCall.call(addressF6hcMag, uinterc3i1x, {from: accounts[2]});
		const boolHxg0zfb = await FinalRNOFZ24.transfer.call(address9vioFi, uintU9KnEXH, {from: "0x0000000000000000000000000000000000000001"});
		const stringvItdhgF = await FinalRNOFZ24.symbol.call({from: accounts[4]});

		assert.equal(boolRCZjdSl, true)
		await expect(FinalRNOFZ24.transfer.call(address9vioFi, uintU9KnEXH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringmcZAzQq = "Y"
		const stringvN5IMwo = "5MTtAQwxkbCwAdnD7SC6iph92VpAzhdpe366uHh0eK4xWfbMX7qiHaF9K3iXLoGWOt7jRjd"
		const uintcQ1iFpe = BigInt("517")
		const FinalYJTNpPF = await Final.new(stringmcZAzQq, stringvN5IMwo, uintcQ1iFpe, {from: accounts[0]});
		const uintdny2QvO = BigInt("710")
		const addressZ7BxcXL = accounts[4]
		const addressRZBc6MJ = accounts[4]
		const boolt4aMxc4 = await FinalYJTNpPF.transferFrom.call(addressRZBc6MJ, addressZ7BxcXL, uintdny2QvO, {from: accounts[1]});
		const stringkbe3xHI = await FinalYJTNpPF.symbol.call({from: accounts[3]});
		const stringXcSaIms = await FinalYJTNpPF.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalYJTNpPF.transferFrom.call(addressRZBc6MJ, addressZ7BxcXL, uintdny2QvO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringUCwQncc = "ZWsSvn7XMLVGfjVblqtQnoFROLnvooDDDDxmyqjvjeYeTzC5jScmPBoxteSz0XJ78JSO"
		const stringbLZfQUz = "O5wy1vmLXBrhRHx"
		const uintlqw2fW = BigInt("200")
		const FinalRNOFZ24 = await Final.new(stringUCwQncc, stringbLZfQUz, uintlqw2fW, {from: accounts[2]});
		const uint0uCDBa = BigInt("1786")
		const addressxZxHWEd = accounts[3]
		const addresssLjH9Z = accounts[0]
		const uintuXMt7vd = BigInt("1167")
		const addressb1LEpF = "0x00000000000000000000000000000000000000-1"
		const boolXfKCND = await FinalRNOFZ24.approve.call(addressxZxHWEd, uint0uCDBa, {from: accounts[4]});
		const uintowGqwHk = await FinalRNOFZ24.balanceOf.call(addresssLjH9Z, {from: accounts[1]});
		const uintAz3nmRX = await FinalRNOFZ24.totalSupply.call({from: accounts[4]});
		const boolRCZjdSl = await FinalRNOFZ24.approveAndCall.call(addressb1LEpF, uintuXMt7vd, {from: accounts[2]});

		assert.equal(boolXfKCND, true)
		assert.equal(uintAz3nmRX, BigInt("200000000000000000000"))
		assert.equal(uintowGqwHk, BigInt("0"))
		await expect(FinalRNOFZ24.approveAndCall.call(addressb1LEpF, uintuXMt7vd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringq4FJBZV = "nBjoyVNg"
		const stringqeU2yDN = "Ff5y28GhXMdUS99nqn4lDfGP4PNKzhpx4twGiAAY5nC2MIJtCleutdmkWUkWrBYVeLXmUAWNfhF6XXda3PbGFS0H7RzRaukrH"
		const uintPP9fT4A = BigInt("903")
		const FinalRpKNScg = await Final.new(stringq4FJBZV, stringqeU2yDN, uintPP9fT4A, {from: "0x0000000000000000000000000000000000000001"});
		const uinteS44Lmh = BigInt("1257")
		const addressJfrDkDO = accounts[3]
		const addressmctzq8n = accounts[1]
		const uinth41YOKX = BigInt("840")
		const addressBCVUj0n = accounts[1]
		const boolRHvvMwq = await FinalRpKNScg.transferFrom.call(addressmctzq8n, addressJfrDkDO, uinteS44Lmh, {from: accounts[4]});
		const boolkLkynqV = await FinalRpKNScg.transfer.call(addressBCVUj0n, uinth41YOKX, {from: accounts[2]});
	});
})