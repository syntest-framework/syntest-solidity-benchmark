const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringPfTdVLD = "pVMDeaKTwkrEPNFlxIyXuyuFaCbcutcB"
		const stringNW8q61G = "fQPMhgh5bTSBGVxyd3fLxggowkRAbmecFeDtIECRu5pJYOBrsNUI2d28rFCBoYRLoeEWSEG"
		const uintY4n5IWB = BigInt("20")
		const FinalQiv4X5y = await Final.new(stringPfTdVLD, stringNW8q61G, uintY4n5IWB, {from: accounts[4]});
		const addressPakRmQY = accounts[1]
		const uintuPhA5A5 = BigInt("990")
		const addressjlED9kb = accounts[4]
		const addressU0uUX4q = accounts[3]
		const addressVVNmcV2 = accounts[3]
		const uintvWStneR = await FinalQiv4X5y.balanceOf.call(addressPakRmQY, {from: accounts[1]});
		const uint8aqWLwOb = await FinalQiv4X5y.decimals.call({from: accounts[2]});
//		const boolmOOnKvT = await FinalQiv4X5y.transferFrom.call(addressU0uUX4q, addressjlED9kb, uintuPhA5A5, {from: accounts[4]});
//		const uintJUm6p6P = await FinalQiv4X5y.balanceOf.call(addressVVNmcV2, {from: accounts[0]});

		assert.equal(uint8aqWLwOb, BigInt("18"))
		assert.equal(uintvWStneR, BigInt("0"))
		await expect(FinalQiv4X5y.transferFrom.call(addressU0uUX4q, addressjlED9kb, uintuPhA5A5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringONlE4lX = "GJlUu83vQAOQ5hqm13CS4imTa7vcUzzW72bUP7p1q8U0wbWqYXtAf1sflTPMXalQNQSHALO43EJ9ddTnqJ"
		const stringHUZXNJw = "b4"
		const uintHEtbAZb = BigInt("611")
		const FinalzeYofjT = await Final.new(stringONlE4lX, stringHUZXNJw, uintHEtbAZb, {from: accounts[2]});
		const addressekwgOdB = accounts[3]
		const uint7pfahv = BigInt("628")
		const addresssXoIwRM = accounts[2]
		const uintlb0fIR0 = BigInt("860")
		const addresskwAkpie = accounts[4]
		const uintI5cplhZ = await FinalzeYofjT.balanceOf.call(addressekwgOdB, {from: accounts[1]});
		const stringrXyXtZQ = await FinalzeYofjT.symbol.call({from: accounts[1]});
		const boolJKNP1iE = await FinalzeYofjT.approve.call(addresssXoIwRM, uint7pfahv, {from: accounts[2]});
//		const booluvoJ5L = await FinalzeYofjT.decreaseAllowance.call(addresskwAkpie, uintlb0fIR0, {from: accounts[3]});
//		const stringtcGku8a = await FinalzeYofjT.symbol.call({from: accounts[3]});

		assert.equal(boolJKNP1iE, true)
		assert.equal(stringrXyXtZQ, "b4")
		assert.equal(uintI5cplhZ, BigInt("0"))
		await expect(FinalzeYofjT.decreaseAllowance.call(addresskwAkpie, uintlb0fIR0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string8Ytu67 = "pMGNz3drlH5Vmb6seC9asc2qvlRkri6XNgLp8ciby"
		const stringHLPMd42 = "dUYPcdS3sAxNfuMLMrq2ksXqSVd29nS56r"
		const uintoshKBiV = BigInt("1837")
		const FinalrbZimb3 = await Final.new(string8Ytu67, stringHLPMd42, uintoshKBiV, {from: accounts[0]});
		const uintCx7mCZq = BigInt("1295")
		const addressKQO9vhm = accounts[5]
		const uintOb7ThCr = BigInt("50")
		const addressQYEzp0O = accounts[0]
		const uintDMBzefe = BigInt("1169")
		const addressb7xfKGI = "0x0000000000000000000000000000000000000001"
		const uintiCvdKOe = BigInt("1826")
		const addressfFq5jIQ = accounts[1]
		const boolvWR06ct = await FinalrbZimb3.approve.call(addressKQO9vhm, uintCx7mCZq, {from: accounts[2]});
		const booldOetXNF = await FinalrbZimb3.approve.call(addressQYEzp0O, uintOb7ThCr, {from: accounts[4]});
//		const boolOtauJ5A = await FinalrbZimb3.transfer.call(addressb7xfKGI, uintDMBzefe, {from: accounts[3]});
//		const uintXjPexRs = await FinalrbZimb3.totalSupply.call({from: accounts[3]});
//		const boolfJxYGJm = await FinalrbZimb3.approveAndCall.call(addressfFq5jIQ, uintiCvdKOe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldOetXNF, true)
		assert.equal(boolvWR06ct, true)
		await expect(FinalrbZimb3.transfer.call(addressb7xfKGI, uintDMBzefe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string7nW67M = "pIejnOZz2TntZ"
		const stringR1Ejr2 = "oTTdoaNur1F6TszQxkOeXLdMtAPEz4wYdjJjfK5dASLVbG4pQYrnd9IdDnGw0URig1LbtWgK1UXkR1RmVpFqOzE3vGdWMcN1mj"
		const uinti7Ix7Ik = BigInt("155")
		const FinaljOIy6YB = await Final.new(string7nW67M, stringR1Ejr2, uinti7Ix7Ik, {from: accounts[3]});
		const uintl2eZgZ8 = BigInt("439")
		const addressQM6LgTP = "0x0000000000000000000000000000000000000001"
		const uint8HsDw8br = await FinaljOIy6YB.decimals.call({from: accounts[2]});
		const uintUkQMcEs = await FinaljOIy6YB.totalSupply.call({from: accounts[5]});
		const stringT1HOnu = await FinaljOIy6YB.name.call({from: accounts[3]});
		const uint8cL78aGl = await FinaljOIy6YB.decimals.call({from: accounts[3]});
//		const boolIHw332t = await FinaljOIy6YB.approveAndCall.call(addressQM6LgTP, uintl2eZgZ8, {from: accounts[2]});

		assert.equal(stringT1HOnu, "pIejnOZz2TntZ")
		assert.equal(uint8HsDw8br, BigInt("18"))
		assert.equal(uint8cL78aGl, BigInt("18"))
		assert.equal(uintUkQMcEs, BigInt("155000000000000000000"))
		await expect(FinaljOIy6YB.approveAndCall.call(addressQM6LgTP, uintl2eZgZ8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringLxmlx8P = "Ij5c7dSvF4soRenkDilcxnCGy"
		const stringfSnM4VT = "uw81MuMQBgAiXkYWXEhMopCBD73Lll2iy7o12f7"
		const uintFJZgC9q = BigInt("173")
		const Finalu0JB4jZ = await Final.new(stringLxmlx8P, stringfSnM4VT, uintFJZgC9q, {from: accounts[4]});
		const uinttpMRMVB = BigInt("716")
		const addressxBzTMor = accounts[1]
		const addressX360Fza = accounts[4]
		const uintzFWZtd0 = BigInt("264")
		const addresskShRxDR = accounts[1]
		const boolRoKtHo4 = await Finalu0JB4jZ.approve.call(addressxBzTMor, uinttpMRMVB, {from: accounts[5]});
//		const boolOq49xqz = await Finalu0JB4jZ.transferownership.call(addressX360Fza, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEFhxLt6 = await Finalu0JB4jZ.transfer.call(addresskShRxDR, uintzFWZtd0, {from: accounts[5]});
//		const stringfuD9ma = await Finalu0JB4jZ.symbol.call({from: accounts[1]});

		assert.equal(boolRoKtHo4, true)
		await expect(Finalu0JB4jZ.transferownership.call(addressX360Fza, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringJE8kHs3 = "3UBQ5EKuf284aXIrfurB6eawcFBykRuN55T3MG2srAdA8U2L5mpeX5nTkO3d1AXiyhpfhEmg6lckN"
		const stringzoZR1Mg = "Ac19NLAWI6oSe1x5FYwMdefUPmtVFNejl4BuuNnTlR2q0kLdK5HsPqO4Dw0Ra2qD1afTV9xsrG"
		const uintJ8Wem8z = BigInt("186")
		const FinalFT2lDdt = await Final.new(stringJE8kHs3, stringzoZR1Mg, uintJ8Wem8z, {from: accounts[5]});
		const uintQGDeU17 = BigInt("1188")
		const addressZ5wBAFU = accounts[3]
		const uintjseFwAs = BigInt("202")
		const addressHNK3N6X = accounts[0]
		const uintcJeA547 = BigInt("1798")
		const addresse1iz3DM = accounts[0]
		const booln1aYCq0 = await FinalFT2lDdt.transfer.call(addressZ5wBAFU, uintQGDeU17, {from: accounts[5]});
		const boolKl70Se6 = await FinalFT2lDdt.approve.call(addressHNK3N6X, uintjseFwAs, {from: accounts[1]});
		const stringbJQ9yp2 = await FinalFT2lDdt.name.call({from: accounts[1]});
		const boolHWmLP7F = await FinalFT2lDdt.approve.call(addresse1iz3DM, uintcJeA547, {from: accounts[1]});

		assert.equal(boolHWmLP7F, true)
		assert.equal(boolKl70Se6, true)
		assert.equal(booln1aYCq0, true)
		assert.equal(stringbJQ9yp2, "3UBQ5EKuf284aXIrfurB6eawcFBykRuN55T3MG2srAdA8U2L5mpeX5nTkO3d1AXiyhpfhEmg6lckN")
	});

	it('test for Final', async () => {
		const stringCPpRrAO = "ddbBxuySfvpyuhA3KGngurhFYmQNXqijtsyK7ETdj3y4U3D9TZJoYWsgq3V9aICSvtBnahQC4XUnqm7nU"
		const stringp6lvtIg = "tsWKCqmds6QvRNEtiw4H9I2SNktqYDVFjUfgN"
		const uintJmiJjQU = BigInt("196")
		const FinaliTDNDX = await Final.new(stringCPpRrAO, stringp6lvtIg, uintJmiJjQU, {from: "0x0000000000000000000000000000000000000001"});
		const uintYYCr6c3 = BigInt("1029")
		const addresssIfAaH = accounts[3]
		const addressTYtA7o2 = accounts[3]
		const addressxb6MVQF = accounts[3]
		const uintF2AWhmE = BigInt("1844")
		const addressdiRbQWb = accounts[3]
		const boollwBAZBV = await FinaliTDNDX.decreaseAllowance.call(addresssIfAaH, uintYYCr6c3, {from: accounts[0]});
		const uintUmUbso0 = await FinaliTDNDX.allowance.call(addressxb6MVQF, addressTYtA7o2, {from: accounts[5]});
		const boolMHasrLL = await FinaliTDNDX.increaseAllowance.call(addressdiRbQWb, uintF2AWhmE, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringLxmlx8P = "Ij5c7dSvF4soRenkDilcxnCGy"
		const stringfSnM4VT = "uw81MuMQBgAiXkYWXEhMopCBD73Lll2iy7o12f7"
		const uintGVUcy3K = BigInt("173")
		const Finalu0JB4jZ = await Final.new(stringLxmlx8P, stringfSnM4VT, uintGVUcy3K, {from: accounts[4]});
		const uintXwelOR = BigInt("0")
		const addressDgY2pA = accounts[1]
		const addressK5eTfd = accounts[4]
		const boolljnuHxc = await Finalu0JB4jZ.transferFrom.call(addressK5eTfd, addressDgY2pA, uintXwelOR, {from: accounts[1]});

		assert.equal(boolljnuHxc, true)
	});

	it('test for Final', async () => {
		const stringLxmlx8P = "Ij5c7dSvF4soRenkDilcxnCGy"
		const stringfSnM4VT = "uw81MuMQBgAiXkYWXEhMopCBD73Lll2iy7o12f7"
		const uinta6uJIGX = BigInt("173")
		const Finalu0JB4jZ = await Final.new(stringLxmlx8P, stringfSnM4VT, uinta6uJIGX, {from: accounts[4]});
		const uint76cd7T = BigInt("500")
		const addressYV4eyDQ = accounts[3]
		const uintNmLfE7V = BigInt("272")
		const addressaVnMiva = accounts[1]
		const boolgmn7kgn = await Finalu0JB4jZ.approveAndCall.call(addressYV4eyDQ, uint76cd7T, {from: accounts[4]});
//		const boolEFhxLt6 = await Finalu0JB4jZ.transfer.call(addressaVnMiva, uintNmLfE7V, {from: accounts[5]});

		assert.equal(boolgmn7kgn, true)
		await expect(Finalu0JB4jZ.transfer.call(addressaVnMiva, uintNmLfE7V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})