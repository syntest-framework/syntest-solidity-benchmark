const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintEEqGl5w = BigInt("838")
		const stringlWJt3qf = "muKINf3fhhVmATJtDMICwpBgL8GsblUb6sBEirtjwCH72tiKYq4DpPrfXKFkbaN1zG2QcpqpITp2ByH3V9ZG0YBVpBmANFAx"
		const stringUpdBXhh = "o4FqTAMFCP6cPcwuCAyanOtT1VPEgGfssCpcFepcGtvrAlJcc6sP"
		const GreenMarkTrustUXzfNB = await GreenMarkTrust.new(uintEEqGl5w, stringlWJt3qf, stringUpdBXhh, {from: accounts[4]});
		const bytemVwTeeX = "0x0f"
		const uintI3khNt9 = BigInt("1483")
		const addressrdLUaq = accounts[3]
		const uintIHAxijr = BigInt("1310")
		const uintofxZ7xS = BigInt("971")
//		const boolwjLJRiY = await GreenMarkTrustUXzfNB.approveAndCall.call(addressrdLUaq, uintI3khNt9, bytemVwTeeX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolc9xjy05 = await GreenMarkTrustUXzfNB.burn.call(uintIHAxijr, {from: accounts[5]});
//		const bools1YWQAC = await GreenMarkTrustUXzfNB.burn.call(uintofxZ7xS, {from: accounts[4]});

		await expect(GreenMarkTrustUXzfNB.approveAndCall.call(addressrdLUaq, uintI3khNt9, bytemVwTeeX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint0JZrHP = BigInt("1187")
		const stringrkpp8BB = "L1Vyk1ICwJBV9mQkx0KwblaDiqVvr4fmIXmaFC7Vtmi0Gx5IwMSAPQsxqhvCSefB5sLPiyHLShvZ"
		const string9dBaMK = "wl9GAlLFNCnj4hebvXn9tIGwLL0"
		const GreenMarkTrustOnDnG5b = await GreenMarkTrust.new(uint0JZrHP, stringrkpp8BB, string9dBaMK, {from: accounts[4]});
		const uintuXM5mfj = BigInt("445")
		const addressuJ3xsF = accounts[3]
		const uintJzrJCPJ = BigInt("1751")
		const addressyflNa8E = accounts[3]
		const boolGp8eBzC = await GreenMarkTrustOnDnG5b.approve.call(addressuJ3xsF, uintuXM5mfj, {from: accounts[1]});
//		const boolIaCwsCn = await GreenMarkTrustOnDnG5b.transfer.call(addressyflNa8E, uintJzrJCPJ, {from: accounts[1]});

		assert.equal(boolGp8eBzC, true)
		await expect(GreenMarkTrustOnDnG5b.transfer.call(addressyflNa8E, uintJzrJCPJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintL19zMdK = BigInt("1013")
		const stringvriOvM0 = "ALKF2ByjvUqUJOFOlxaF5BF5gRqn0jkfs36RyzB3JM"
		const stringZ7ip1wn = "PLkLWYNPr9bjWIEvwj5QdM8SJBPYpQpJDVTRw7NnrpWtOlmgwy9t7m"
		const GreenMarkTrustyLA7Et = await GreenMarkTrust.new(uintL19zMdK, stringvriOvM0, stringZ7ip1wn, {from: accounts[3]});
		const uintdDjw6uE = BigInt("1039")
		const addressKitLnGq = accounts[4]
		const uintXx2sbwd = BigInt("1407")
		const addressELIzxG7 = accounts[0]
		const addressbZaI097 = accounts[0]
		const uintM5XoBzr = BigInt("821")
		const addressqsbPnsd = accounts[0]
		const addressSqGZOaT = accounts[2]
		const uintZkS8y80 = BigInt("1953")
		const addresscx0I3c5 = accounts[1]
		const uintkTMNJbe = BigInt("877")
		const addresseXAxcIP = accounts[1]
		const addressZPQp0Rw = accounts[1]
//		const booljD1mWUs = await GreenMarkTrustyLA7Et.burnFrom.call(addressKitLnGq, uintdDjw6uE, {from: accounts[1]});
//		const boolACaYfUK = await GreenMarkTrustyLA7Et.transferFrom.call(addressbZaI097, addressELIzxG7, uintXx2sbwd, {from: accounts[4]});
//		const boolmBSHYC8 = await GreenMarkTrustyLA7Et.transferFrom.call(addressSqGZOaT, addressqsbPnsd, uintM5XoBzr, {from: accounts[1]});
//		const booloJGvzpu = await GreenMarkTrustyLA7Et.approve.call(addresscx0I3c5, uintZkS8y80, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFJBE5HN = await GreenMarkTrustyLA7Et.transferFrom.call(addressZPQp0Rw, addresseXAxcIP, uintkTMNJbe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustyLA7Et.burnFrom.call(addressKitLnGq, uintdDjw6uE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinthUdfMZu = BigInt("99")
		const stringQiFsXC6 = "JhJaA1MWADQ7EhkVltC76V8HtFSG"
		const stringM5vhzDz = "tmx90DlkcemTUBq8OElWhBKycSL91KlWRJzmRRFnRb70AASyFHXv7VZQ6IprSBsUd7NNQX1l"
		const GreenMarkTrustsnhJZv9 = await GreenMarkTrust.new(uinthUdfMZu, stringQiFsXC6, stringM5vhzDz, {from: accounts[0]});
		const uintP66MWTG = BigInt("669")
		const uintp4hoima = BigInt("711")
		const uintkikQw1V = BigInt("432")
		const addresswSrT08w = accounts[3]
		const uintuoUl0Tr = BigInt("1663")
		const boolOlttc8w = await GreenMarkTrustsnhJZv9.burn.call(uintP66MWTG, {from: accounts[0]});
//		const boolQG2jI8u = await GreenMarkTrustsnhJZv9.burn.call(uintp4hoima, {from: accounts[3]});
//		const boolQDr1ZGR = await GreenMarkTrustsnhJZv9.burnFrom.call(addresswSrT08w, uintkikQw1V, {from: accounts[4]});
//		const boolqHCLekK = await GreenMarkTrustsnhJZv9.burn.call(uintuoUl0Tr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOlttc8w, true)
		await expect(GreenMarkTrustsnhJZv9.burn.call(uintp4hoima, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintBVqWnfE = BigInt("672")
		const stringR9w869 = "bHxQo5fULvJ5PXIF73giJNk2vWWotsGn6YznVnospM"
		const stringDsbB5uF = "LyCduQeVEAZH2i16XYwC2CE2Ekj6ImQcFWp93dUHdYOMoLOw4J6LA8WhMnEo9jN3q6PZwMFmC5ooqF7WNnWKIiOKY1qbwu"
		const GreenMarkTrustHpc2j7t = await GreenMarkTrust.new(uintBVqWnfE, stringR9w869, stringDsbB5uF, {from: "0x0000000000000000000000000000000000000001"});
		const uintsbJlcZq = BigInt("1594")
		const addressRLJJk6b = "0x0000000000000000000000000000000000000001"
		const byteeEU3JmS = "0x13031202010d1c1e061a0f"
		const uintNnQIVRB = BigInt("269")
		const addresspCsN2v0 = accounts[4]
		const uintwT7xvcu = BigInt("1539")
		const addressOYoQxLf = accounts[4]
		const boolV0O0VjR = await GreenMarkTrustHpc2j7t.approve.call(addressRLJJk6b, uintsbJlcZq, {from: accounts[2]});
		const boolzQ5u3em = await GreenMarkTrustHpc2j7t.approveAndCall.call(addresspCsN2v0, uintNnQIVRB, byteeEU3JmS, {from: accounts[1]});
		const boollZ70B0B = await GreenMarkTrustHpc2j7t.transfer.call(addressOYoQxLf, uintwT7xvcu, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintb1jngSJ = BigInt("531")
		const stringDmQBwjX = "Y8AGAnZcSKLLsUmUhV2jAANfTbBNgGlY3Cu7Celk9iTl43IvuLCUJ4WCXYUdrxQTqdkiFKgbHlWItk5IwYw"
		const stringNn1eXqi = "41pO2tMbfBeiOefx1EMUUV5MUuuB2lkR5etegD43AQfr3w3s9WQ1ncmDEb4DHmAXSIE95EnExIHW6f7sKUItqN7WgW"
		const GreenMarkTrustJNsMbJ = await GreenMarkTrust.new(uintb1jngSJ, stringDmQBwjX, stringNn1eXqi, {from: accounts[3]});
		const uintCHJ0e0a = BigInt("661")
		const addressxIxJC1 = accounts[2]
		const uintlgIqt82 = BigInt("1065")
		const addressRU0VYN8 = accounts[1]
		const addressw0tMolN = accounts[2]
		const uintgluS4Dz = BigInt("1852")
		const addresscsXfV9y = accounts[4]
		const addressjC5NyhR = accounts[5]
		const boolXwItQjW = await GreenMarkTrustJNsMbJ.approve.call(addressxIxJC1, uintCHJ0e0a, {from: accounts[4]});
//		const boolPlU1Ai7 = await GreenMarkTrustJNsMbJ.transferFrom.call(addressw0tMolN, addressRU0VYN8, uintlgIqt82, {from: accounts[3]});
//		const boolILGJ2ZU = await GreenMarkTrustJNsMbJ.transferFrom.call(addressjC5NyhR, addresscsXfV9y, uintgluS4Dz, {from: accounts[4]});

		assert.equal(boolXwItQjW, true)
		await expect(GreenMarkTrustJNsMbJ.transferFrom.call(addressw0tMolN, addressRU0VYN8, uintlgIqt82, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQfuJLPt = BigInt("1187")
		const stringrkpp8BB = "L1Vyk1ICwJBV9mQkx0KwblaDiqVvr4fmIXmaFC7Vtmi0Gx5IwMSAPQsxqhvCSefB5sLPiyHLShvZ"
		const string9dBaMK = "wl9GAlLFNCnj4hebvXn9tIGwLL0"
		const GreenMarkTrustOnDnG5b = await GreenMarkTrust.new(uintQfuJLPt, stringrkpp8BB, string9dBaMK, {from: accounts[4]});
		const uintAjyqTbi = BigInt("445")
		const addressnKKDYwq = accounts[3]
		const uintOiEeA72 = BigInt("846")
		const addressCLDKsf = accounts[4]
		const uintlkQOUT3 = BigInt("1228")
		const addressXMqt0k2 = accounts[0]
		const uintofp79dp = BigInt("45")
		const addressy0MWULT = accounts[4]
		const boolGp8eBzC = await GreenMarkTrustOnDnG5b.approve.call(addressnKKDYwq, uintAjyqTbi, {from: accounts[1]});
//		const boolTXlmIOV = await GreenMarkTrustOnDnG5b.burnFrom.call(addressCLDKsf, uintOiEeA72, {from: accounts[2]});
//		const boolGZKWFc = await GreenMarkTrustOnDnG5b.burnFrom.call(addressXMqt0k2, uintlkQOUT3, {from: accounts[4]});
//		const bool9atBRn = await GreenMarkTrustOnDnG5b.transfer.call(addressy0MWULT, uintofp79dp, {from: accounts[0]});

		assert.equal(boolGp8eBzC, true)
		await expect(GreenMarkTrustOnDnG5b.burnFrom.call(addressCLDKsf, uintOiEeA72, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintlS5CplX = BigInt("176")
		const stringD7kD0OP = "RQyxA"
		const stringqFBBew = "6v2NQuROpv2JE9AbMbkV1zIRkO7G8ZWy9UrRbp28t"
		const GreenMarkTrustJsIuZAA = await GreenMarkTrust.new(uintlS5CplX, stringD7kD0OP, stringqFBBew, {from: accounts[2]});
		const uintUxIROm = BigInt("376")
		const addressnq9jNb = accounts[1]
		const uintv4kk0T = BigInt("1596")
		const addressavgmdHs = accounts[5]
		const uintzFxsiOE = BigInt("598")
		const addressRC0dwi1 = accounts[3]
		const uintrpmbFXf = BigInt("1632")
		const addressZbLhfBH = "0x0000000000000000000000000000000000000001"
		const uintaZDewGm = BigInt("1459")
		const addresshdaN05d = accounts[4]
		const uintEjDgKvl = BigInt("56")
		const boolwV7ZlV2 = await GreenMarkTrustJsIuZAA.transfer.call(addressnq9jNb, uintUxIROm, {from: accounts[2]});
//		const boolWFHjgnf = await GreenMarkTrustJsIuZAA.transfer.call(addressavgmdHs, uintv4kk0T, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCGxbRK2 = await GreenMarkTrustJsIuZAA.transfer.call(addressRC0dwi1, uintzFxsiOE, {from: accounts[0]});
//		const boolcasyZFc = await GreenMarkTrustJsIuZAA.approve.call(addressZbLhfBH, uintrpmbFXf, {from: accounts[0]});
//		const boolEGL7IW8 = await GreenMarkTrustJsIuZAA.approve.call(addresshdaN05d, uintaZDewGm, {from: accounts[0]});
//		const boolQt4fqOq = await GreenMarkTrustJsIuZAA.burn.call(uintEjDgKvl, {from: accounts[2]});

		assert.equal(boolwV7ZlV2, true)
		await expect(GreenMarkTrustJsIuZAA.transfer.call(addressavgmdHs, uintv4kk0T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})