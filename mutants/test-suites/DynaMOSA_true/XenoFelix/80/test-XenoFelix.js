const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringP6jNeVN = "AmpjYur8BqMc62cNyyAUTbyRc8ejzw7G4OjUoR6bXNTnDVYTueGTcQrdNg41nGe6VYUtQJixB4zyqgld"
		const stringajUlZ8D = "6IcZOGijBSeuFgbszLhFa7bho0tdOOSUiF9A6HyOM"
		const uintbYGGr1E = BigInt("1599")
		const uintoNSAAlL = BigInt("84")
		const XenoFelixBxGHEyV = await XenoFelix.new(stringP6jNeVN, stringajUlZ8D, uintbYGGr1E, uintoNSAAlL, {from: accounts[2]});
		const uintrxaCVrI = BigInt("1858")
		const addressSddUpzM = accounts[2]
		const uintRXzfngU = BigInt("823")
		const addresshKUNzDk = accounts[3]
//		await XenoFelixBxGHEyV.onlyPauser.call({from: accounts[2]});
//		await XenoFelixBxGHEyV.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresskYCdBcS = await XenoFelixBxGHEyV.burnFrom.call(addressSddUpzM, uintrxaCVrI, {from: accounts[3]});
//		const boolHbACLlx = await XenoFelixBxGHEyV.burnOwner.call(addresshKUNzDk, uintRXzfngU, {from: accounts[2]});

		await expect(XenoFelixBxGHEyV.onlyPauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string9KZqyz = "RDsEM78Gr6HPDLyrt0sswJMRJXi2G1EXjbN5ejC9QOMeNE"
		const stringilG5LGH = "XKJBL6GVY4Ui5uBjsl9fGp2LtAL6z11UegL7ukqN7yNY4DFOvgG31uvlDqjFPCDuP7JAQSN"
		const uintZbsEXpn = BigInt("66")
		const XenoFelixOXZOPxQ = await XenoFelix.new(string9KZqyz, stringilG5LGH, uintZbsEXpn, {from: accounts[3]});
		const addressJV908ll = accounts[3]
		const addressF2xYxMx = accounts[4]
		const booliohuwlZ = await XenoFelixOXZOPxQ.paused.call({from: accounts[4]});
		const boolozByzm8 = await XenoFelixOXZOPxQ.isPauser.call(addressJV908ll, {from: accounts[4]});
		const uint256n5FuV8 = await XenoFelixOXZOPxQ.balanceOf.call(addressF2xYxMx, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringObhBCKa = "BUEjyhk96JrmqJh1Nrg8KFWb9h1AKyXgWsPS46UFrjRV0IqwI4pjhiLqH9Sf626EJNWu4DzSja1z911"
		const stringNmhzLNY = "EPsYcEsp3ftX3BsarmWVRA2e8JIlp3lOMHHrd3VBWomQfXbzlmj"
		const uintghJKnNY = BigInt("115")
		const XenoFelixmMOZND6 = await XenoFelix.new(stringObhBCKa, stringNmhzLNY, uintghJKnNY, {from: accounts[4]});
		const addressYVJE95y = accounts[1]
		const addressXUVmQVe = accounts[3]
		const addressDAeAA4z = accounts[1]
		const addresskKBkNxc = await XenoFelixmMOZND6.addPauser.call(addressYVJE95y, {from: accounts[0]});
		const addressqXu0tL = await XenoFelixmMOZND6.notFrozenAndTransaction.call(addressDAeAA4z, addressXUVmQVe, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringZQz1Sh = "IP8Nxw3MUBBdW9H4kovxuqR78Y1g59pjWFbbRAyOFDdReehldesHia4MZ7Vhl9csEyPy7YsJhqKpbdDGwDtgWsmxeudQ"
		const stringAuReCrE = "15OcAx6aNglQjKEiV6e9mGJp2gGzCm0Sv"
		const uintLQYKmHb = BigInt("75")
		const XenoFelixqKT4L1H = await XenoFelix.new(stringZQz1Sh, stringAuReCrE, uintLQYKmHb, {from: accounts[5]});
		const uintRYa35w7 = BigInt("1270")
		const addressFcNW76n = accounts[3]
		const addressTDIP6FU = accounts[4]
		const stringKzjedut = await XenoFelixqKT4L1H.name.call({from: accounts[0]});
		const boolwblBSmT = await XenoFelixqKT4L1H.transferFrom.call(addressTDIP6FU, addressFcNW76n, uintRYa35w7, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixd6xNILo = await XenoFelix.new({from: accounts[1]});
		const addressz7X0do = accounts[0]
		const addressodsORUe = accounts[2]
		const uintJslCFaN = BigInt("173")
		const addressuiPJtwB = accounts[0]
		const uintnW442aM = BigInt("805")
		const addressaKsF7Z = accounts[1]
		const addresszsN8MMD = accounts[2]
		const uintaT5mdbF = BigInt("535")
		const addressRyiXACa = accounts[5]
		const addressV90sQxN = await XenoFelixd6xNILo.addPauser.call(addressz7X0do, {from: accounts[2]});
		const boolMgiVm6 = await XenoFelixd6xNILo.isPauser.call(addressodsORUe, {from: accounts[2]});
		const stringIctdnVb = await XenoFelixd6xNILo.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOxPKIbj = await XenoFelixd6xNILo.increaseAllowance.call(addressuiPJtwB, uintJslCFaN, {from: accounts[1]});
		const boolQ0uOXBh = await XenoFelixd6xNILo.transferFrom.call(addresszsN8MMD, addressaKsF7Z, uintnW442aM, {from: accounts[0]});
		const boolItioPez = await XenoFelixd6xNILo.transfer.call(addressRyiXACa, uintaT5mdbF, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringeAw0kCP = "iH8IlEKMaGKW40OpyxzRsrDZAQ48QGcf4KgI5Kpy9BOl9a4y3NBIao5kKTdL3XUbz1DDIIwtSTkLwOYqXn8RmAwfo"
		const stringHTZ4ry = "y1J9DblnNSNttq9xySNuUzvUglu1EqwYT6WgmNzEsdyQZZYhi5LN8pyaz6huyVnJbkpJsWpozyLQTk9JRVjLq4C17M"
		const uintMoQ8eOF = BigInt("93")
		const XenoFelixuGFSGMt = await XenoFelix.new(stringeAw0kCP, stringHTZ4ry, uintMoQ8eOF, {from: accounts[1]});
		const uintEbBIE4 = BigInt("1235")
		await XenoFelixuGFSGMt.whenPaused.call({from: accounts[4]});
		const uint256LOE66gW = await XenoFelixuGFSGMt.burn.call(uintEbBIE4, {from: accounts[3]});
		await XenoFelixuGFSGMt.renouncePauser.call({from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintpuWRGd0 = BigInt("115")
		const uintfMvDOs = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintpuWRGd0, uintfMvDOs, {from: accounts[2]});
		const uintZoNrAq = BigInt("1678")
		const addressn9SYgmG = accounts[0]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressn9SYgmG, uintZoNrAq, {from: accounts[0]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintmusWas5 = BigInt("115")
		const uintCtXS3cs = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintmusWas5, uintCtXS3cs, {from: accounts[2]});
		const uintuVY1MzG = BigInt("1682")
		const addressgoPAWSo = accounts[0]
		const uinticv2UNP = BigInt("1877")
		const addressQQO9ffa = accounts[4]
		const addressVSHGoSJ = accounts[0]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressgoPAWSo, uintuVY1MzG, {from: accounts[0]});
//		const addressTKsCAwV = await XenoFelixaB6q60B.burnFrom.call(addressQQO9ffa, uinticv2UNP, {from: accounts[3]});
//		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressVSHGoSJ, {from: accounts[1]});
//		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		assert.equal(boolmtZaPli, true)
		await expect(XenoFelixaB6q60B.burnFrom.call(addressQQO9ffa, uinticv2UNP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintwSxaqj8 = BigInt("115")
		const uintXZ3aAL = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintwSxaqj8, uintXZ3aAL, {from: accounts[2]});
		const uintXgOdLwm = BigInt("1684")
		const uintfoSdU01 = BigInt("769")
		const addressfE2Zls2 = accounts[2]
		const uintKWGODKF = BigInt("1678")
		const addressR5pilg = accounts[0]
//		const boolhsdlVT = await XenoFelixaB6q60B.lock.call(addressfE2Zls2, uintfoSdU01, uintXgOdLwm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressR5pilg, uintKWGODKF, {from: accounts[0]});
//		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		await expect(XenoFelixaB6q60B.lock.call(addressfE2Zls2, uintfoSdU01, uintXgOdLwm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHKYxGvm = "KBxEw4UP2DuP8D"
		const stringQAa1zf2 = "AJ"
		const uintz64mqww = BigInt("194")
		const XenoFelixzP9GDl6 = await XenoFelix.new(stringHKYxGvm, stringQAa1zf2, uintz64mqww, {from: accounts[2]});
		const uintbFmPrTu = BigInt("848")
		const addressKY2ODym = accounts[0]
		const uinthHNryqe = BigInt("1705")
		const uintviAGSWq = BigInt("602")
		const addresscaJ42Ii = accounts[4]
		const booliEfQwrZ = await XenoFelixzP9GDl6.transfer.call(addressKY2ODym, uintbFmPrTu, {from: accounts[1]});
		const uint256LPIvpCx = await XenoFelixzP9GDl6.burn.call(uinthHNryqe, {from: accounts[1]});
		const boolbQnAGCB = await XenoFelixzP9GDl6.transfer.call(addresscaJ42Ii, uintviAGSWq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintZUIiUA = BigInt("115")
		const uintrqsaFAu = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintZUIiUA, uintrqsaFAu, {from: accounts[2]});
		const uintyux4ghv = BigInt("1682")
		const addressOFoKFZK = accounts[0]
		const uintgKXUwNg = BigInt("1877")
		const addressYLVsQIi = accounts[4]
		const addressoYzShOa = accounts[0]
		const uintyijqEFV = BigInt("1929")
		const addressSPjH9gm = accounts[1]
		const boolWkLdQM2 = await XenoFelixaB6q60B.paused.call({from: accounts[1]});
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressOFoKFZK, uintyux4ghv, {from: accounts[0]});
		const stringSNJaWJP = await XenoFelixaB6q60B.symbol.call({from: accounts[2]});
//		const addressTKsCAwV = await XenoFelixaB6q60B.burnFrom.call(addressYLVsQIi, uintgKXUwNg, {from: accounts[3]});
//		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressoYzShOa, {from: accounts[1]});
//		const booleXDd4nh = await XenoFelixaB6q60B.approve.call(addressSPjH9gm, uintyijqEFV, {from: accounts[2]});
//		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		assert.equal(boolWkLdQM2, false)
		assert.equal(boolmtZaPli, true)
		assert.equal(stringSNJaWJP, "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt")
		await expect(XenoFelixaB6q60B.burnFrom.call(addressYLVsQIi, uintgKXUwNg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintNyaHdHN = BigInt("115")
		const uintvwU9nSF = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintNyaHdHN, uintvwU9nSF, {from: accounts[2]});
		const uintrrTTw2t = BigInt("1682")
		const addressg3cOSFz = accounts[0]
		const addressrBvAqkM = accounts[0]
		const uintZ9AAPY3 = BigInt("1165")
		const addresstcwlz6 = "0x0000000000000000000000000000000000000001"
		const addressCblfgOh = accounts[4]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressg3cOSFz, uintrrTTw2t, {from: accounts[0]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressrBvAqkM, {from: accounts[1]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressCblfgOh, addresstcwlz6, uintZ9AAPY3, {from: accounts[2]});

		assert.equal(boolWIol3M6, false)
		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressCblfgOh, addresstcwlz6, uintZ9AAPY3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintjLRdPTe = BigInt("115")
		const uintcgJAMUC = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintjLRdPTe, uintcgJAMUC, {from: accounts[2]});
		const uintlMMsIdm = BigInt("114")
		const uintjxQ5Ur = BigInt("819")
		const addressepRRifi = accounts[2]
		const uintR0cwTYu = BigInt("1682")
		const addressD55rhWI = accounts[0]
		const addressFTTGVna = accounts[0]
		const uintYhyaYzb = BigInt("1165")
		const addresst9AFfnC = "0x0000000000000000000000000000000000000001"
		const addressGT0dUt = accounts[4]
		const boolik8CVd = await XenoFelixaB6q60B.transferWithLock.call(addressepRRifi, uintjxQ5Ur, uintlMMsIdm, {from: accounts[2]});
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressD55rhWI, uintR0cwTYu, {from: accounts[0]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressFTTGVna, {from: accounts[1]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressGT0dUt, addresst9AFfnC, uintYhyaYzb, {from: accounts[2]});

		assert.equal(boolWIol3M6, false)
		assert.equal(boolik8CVd, true)
		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressGT0dUt, addresst9AFfnC, uintYhyaYzb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintSnlJN11 = BigInt("115")
		const uintnqcoBv = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintSnlJN11, uintnqcoBv, {from: accounts[2]});
		const uintURh79K0 = BigInt("1682")
		const addresse8RbO8D = accounts[1]
		const addressDq6V5qw = accounts[0]
		const uintPXuHPgb = BigInt("409")
		const addressnCIRZIQ = "0x0000000000000000000000000000000000000001"
		const uintqICi50b = BigInt("1852")
		const addressMmP3U7Z = accounts[3]
		const addressfeG38nm = accounts[2]
		const uintG5QMt6g = BigInt("1165")
		const addresstn5GuCO = "0x0000000000000000000000000000000000000001"
		const addressZXlBNf1 = accounts[4]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addresse8RbO8D, uintURh79K0, {from: accounts[0]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressDq6V5qw, {from: accounts[1]});
		const boolZBue10l = await XenoFelixaB6q60B.increaseAllowance.call(addressnCIRZIQ, uintPXuHPgb, {from: accounts[0]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolLanqaaR = await XenoFelixaB6q60B.transferFrom.call(addressfeG38nm, addressMmP3U7Z, uintqICi50b, {from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressZXlBNf1, addresstn5GuCO, uintG5QMt6g, {from: accounts[2]});

		assert.equal(boolWIol3M6, false)
		assert.equal(boolZBue10l, true)
		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressfeG38nm, addressMmP3U7Z, uintqICi50b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintQlGMBsm = BigInt("115")
		const uintBj95N0 = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintQlGMBsm, uintBj95N0, {from: accounts[2]});
		const uintbYH639 = BigInt("1612")
		const addressETLCTP1 = accounts[3]
		const uintZ5vCWgW = BigInt("1871")
		const addressKVpKD0L = accounts[4]
//		const boolgddKLB6 = await XenoFelixaB6q60B.transfer.call(addressETLCTP1, uintbYH639, {from: accounts[5]});
//		const addressTKsCAwV = await XenoFelixaB6q60B.burnFrom.call(addressKVpKD0L, uintZ5vCWgW, {from: accounts[3]});
//		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		await expect(XenoFelixaB6q60B.transfer.call(addressETLCTP1, uintbYH639, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBzqZRa = "TAd"
		const stringMbNGI9k = "A6612ffNB6Duv88SYQjzp4DGdYmsQjWSMYuOfxd5l8lDoQDBsW4w8lO"
		const uintcgumlM0 = BigInt("0")
		const XenoFelixMi3997H = await XenoFelix.new(stringBzqZRa, stringMbNGI9k, uintcgumlM0, {from: "0x0000000000000000000000000000000000000001"});
		const uintNEqU4dt = BigInt("1848")
		const uintJbH4xDa = BigInt("794")
		const addresszVfEWFG = accounts[5]
		const addressUeKroz8 = accounts[4]
		const uintuzvd9DQ = BigInt("1633")
		const addresswNPwyeQ = accounts[2]
		const addressjl12E84 = accounts[2]
		const uintWXHHBZb = BigInt("144")
		const addressChJKNVJ = accounts[5]
		const boolORgpqTb = await XenoFelixMi3997H.transferWithLock.call(addresszVfEWFG, uintJbH4xDa, uintNEqU4dt, {from: accounts[4]});
		const boolnAgU33N = await XenoFelixMi3997H.isOwner.call(addressUeKroz8, {from: accounts[0]});
		const boolJqoTHDz = await XenoFelixMi3997H.transferFrom.call(addressjl12E84, addresswNPwyeQ, uintuzvd9DQ, {from: accounts[4]});
		const boolkQSkao = await XenoFelixMi3997H.increaseAllowance.call(addressChJKNVJ, uintWXHHBZb, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintJa8iv3j = BigInt("115")
		const uintvTgeAPl = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintJa8iv3j, uintvTgeAPl, {from: accounts[2]});
		const uintovWUto9 = BigInt("1682")
		const addressGWphC4l = accounts[0]
		const uintX1DcbV2 = BigInt("1349")
		const uintn7Q80AM = BigInt("637")
		const addressRRWKTHg = accounts[4]
		const uintTcwCkVP = BigInt("1165")
		const addressrjEFf0 = "0x0000000000000000000000000000000000000001"
		const addressiARR6O = accounts[5]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressGWphC4l, uintovWUto9, {from: accounts[0]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolvBanhDE = await XenoFelixaB6q60B.lock.call(addressRRWKTHg, uintn7Q80AM, uintX1DcbV2, {from: accounts[2]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressiARR6O, addressrjEFf0, uintTcwCkVP, {from: accounts[2]});

		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		await expect(XenoFelixaB6q60B.lock.call(addressRRWKTHg, uintn7Q80AM, uintX1DcbV2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uinttHD2KFu = BigInt("115")
		const uintEPzhDM = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uinttHD2KFu, uintEPzhDM, {from: accounts[2]});
		const uintUldaQA5 = BigInt("1682")
		const addressozkCIkY = accounts[0]
		const addressqk3goE = accounts[1]
		const addressrFxcpw = accounts[5]
		const uintrrgEBux = BigInt("1165")
		const addressXPSoAu6 = "0x0000000000000000000000000000000000000001"
		const addressKxuaaJR = accounts[4]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressozkCIkY, uintUldaQA5, {from: accounts[0]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressqk3goE, {from: accounts[1]});
		const uint256zKBop8S = await XenoFelixaB6q60B.balanceOf.call(addressrFxcpw, {from: accounts[3]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressKxuaaJR, addressXPSoAu6, uintrrgEBux, {from: accounts[2]});

		assert.equal(boolWIol3M6, false)
		assert.equal(boolmtZaPli, true)
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		assert.equal(uint256zKBop8S, BigInt("0"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressKxuaaJR, addressXPSoAu6, uintrrgEBux, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxykrx76 = "39xk"
		const string9CQjdT = "jaWtSCIGs3Roc9YHkaJCkLUAVq4MpWEyEclsMp8aCJTxIKHSxCoaVsyI6XJXrvRWDErMvCKNlHQCEWaN8QgVs"
		const uintUJLrk9O = BigInt("87")
		const XenoFelixgWR57mS = await XenoFelix.new(stringxykrx76, string9CQjdT, uintUJLrk9O, {from: accounts[0]});
		const uintXoBBHgt = BigInt("646")
		const addressnhoYeIj = accounts[4]
		const addressyE8duVo = accounts[4]
		const addressOMR0irn = accounts[1]
		const stringFo1Yer = await XenoFelixgWR57mS.name.call({from: accounts[2]});
		const boolWY7wXlL = await XenoFelixgWR57mS.transferFrom.call(addressyE8duVo, addressnhoYeIj, uintXoBBHgt, {from: "0x0000000000000000000000000000000000000001"});
		const bool2ciXvQ = await XenoFelixgWR57mS.freezeAccount.call(addressOMR0irn, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintURjhRRq = BigInt("115")
		const uinthJylvVg = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintURjhRRq, uinthJylvVg, {from: accounts[2]});
		const uintDHgg0vL = BigInt("368")
		const uintzpSS16y = BigInt("114")
		const uintuNKlQdH = BigInt("819")
		const addressULatvx5 = accounts[2]
		const addresszrgTd9n = accounts[1]
		const uintvULdO7t = BigInt("1165")
		const addressFRdghL9 = "0x0000000000000000000000000000000000000001"
		const addressAz9IO73 = accounts[4]
//		const uint256ISQMaax = await XenoFelixaB6q60B.burn.call(uintDHgg0vL, {from: accounts[0]});
//		const boolik8CVd = await XenoFelixaB6q60B.transferWithLock.call(addressULatvx5, uintuNKlQdH, uintzpSS16y, {from: accounts[2]});
//		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addresszrgTd9n, {from: accounts[1]});
//		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressAz9IO73, addressFRdghL9, uintvULdO7t, {from: accounts[2]});

		await expect(XenoFelixaB6q60B.burn.call(uintDHgg0vL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringUj2adQP = "vdnSGJiSMZd9Qelq5NVV5bBlsAoIyoniJXWeEJM1MtuioSUJVc2G9cNSXggLKOlrz9BW2"
		const stringB8z451T = "IDMHPsXo9N3RYM5TBuqnAiAQYboIBTGxIzz3OdiuWmufoWPQsC"
		const uintxme7tDh = BigInt("1980")
		const uintj659QCM = BigInt("45")
		const XenoFelixtQlAHaT = await XenoFelix.new(stringUj2adQP, stringB8z451T, uintxme7tDh, uintj659QCM, {from: accounts[0]});
		const uinta8dBrrT = BigInt("1424")
		const addressDOInkQd = accounts[5]
		const uintmhSfeH = BigInt("1670")
		const addressZKROQ9K = accounts[0]
		const addresspv67zH7 = accounts[0]
		const uintFnNMQfV = BigInt("1226")
		const addressehBzKoh = accounts[2]
		const addresswSlSMfL = "0x0000000000000000000000000000000000000001"
		const boolltGEpr6 = await XenoFelixtQlAHaT.approve.call(addressDOInkQd, uinta8dBrrT, {from: accounts[2]});
//		const boolNbfTdi = await XenoFelixtQlAHaT.decreaseAllowance.call(addressZKROQ9K, uintmhSfeH, {from: accounts[4]});
//		const addressxvIdQ8 = await XenoFelixtQlAHaT.addPauser.call(addresspv67zH7, {from: accounts[4]});
//		const boolcpfRluC = await XenoFelixtQlAHaT.transfer.call(addressehBzKoh, uintFnNMQfV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbaQ138 = await XenoFelixtQlAHaT.notFrozen.call(addresswSlSMfL, {from: accounts[4]});

		assert.equal(boolltGEpr6, true)
		await expect(XenoFelixtQlAHaT.decreaseAllowance.call(addressZKROQ9K, uintmhSfeH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintbmKL3ty = BigInt("115")
		const uintLPgcAgA = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintbmKL3ty, uintLPgcAgA, {from: accounts[2]});
		const uintObMCI2s = BigInt("1683")
		const addressIq37Kgy = accounts[0]
		const addressA2lxURx = accounts[1]
		const addressGTKuFED = accounts[5]
		const uintgQsE8Hi = BigInt("1165")
		const addressMwzWCh4 = "0x0000000000000000000000000000000000000001"
		const addressgwO2rlC = accounts[4]
		const addresssvdMSVZ = "0x0000000000000000000000000000000000000001"
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressIq37Kgy, uintObMCI2s, {from: accounts[0]});
		const stringUITjKQA = await XenoFelixaB6q60B.name.call({from: accounts[4]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressA2lxURx, {from: accounts[1]});
		const uint256zKBop8S = await XenoFelixaB6q60B.balanceOf.call(addressGTKuFED, {from: accounts[3]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressgwO2rlC, addressMwzWCh4, uintgQsE8Hi, {from: accounts[2]});
//		const boolYzP9H5Y = await XenoFelixaB6q60B.unfreezeAccount.call(addresssvdMSVZ, {from: accounts[0]});

		assert.equal(boolWIol3M6, false)
		assert.equal(boolmtZaPli, true)
		assert.equal(stringUITjKQA, "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA")
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		assert.equal(uint256zKBop8S, BigInt("0"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressgwO2rlC, addressMwzWCh4, uintgQsE8Hi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintyRwTft = BigInt("115")
		const uintHMfjQqt = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintyRwTft, uintHMfjQqt, {from: accounts[2]});
		const uintMCc1dig = BigInt("1684")
		const uintQVMhZM = BigInt("1189")
		const addressm2yuyQr = accounts[2]
		const uint8IKpV1vQ = await XenoFelixaB6q60B.decimals.call({from: accounts[1]});
//		const boolhsdlVT = await XenoFelixaB6q60B.lock.call(addressm2yuyQr, uintQVMhZM, uintMCc1dig, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8IKpV1vQ, BigInt("242"))
		await expect(XenoFelixaB6q60B.lock.call(addressm2yuyQr, uintQVMhZM, uintMCc1dig, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintIt9vJRG = BigInt("115")
		const uintDpGmSMJ = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintIt9vJRG, uintDpGmSMJ, {from: accounts[2]});
		const addressofo0dI = accounts[0]
		const uintDJTGZm = BigInt("1165")
		const addressox8kBUu = "0x0000000000000000000000000000000000000002"
		const addressdBZSOJu = accounts[6]
		const addressILPuHvy = accounts[1]
		const addressHqMbx7U = accounts[3]
//		await XenoFelixaB6q60B.renouncePauser.call({from: accounts[4]});
//		const boolqc08drL = await XenoFelixaB6q60B.unfreezeAccount.call(addressofo0dI, {from: accounts[3]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressdBZSOJu, addressox8kBUu, uintDJTGZm, {from: accounts[2]});
//		const addressy585tgt = await XenoFelixaB6q60B.notFrozenAndTransaction.call(addressHqMbx7U, addressILPuHvy, {from: accounts[1]});

		await expect(XenoFelixaB6q60B.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintZjXRVsr = BigInt("115")
		const uintuy9gHtK = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintZjXRVsr, uintuy9gHtK, {from: accounts[2]});
		const uintodOy5jz = BigInt("1683")
		const addressTSsLBBI = accounts[0]
		const addresssjVHwrS = accounts[2]
		const addressfCCZkIk = accounts[4]
		const addressBEDSQCr = accounts[1]
		const uintDIuZzCt = BigInt("1313")
		const addressaF9fRha = accounts[4]
		const addressQSpX30R = accounts[5]
		const uintqV37dij = BigInt("1165")
		const address90ygxS = "0x0000000000000000000000000000000000000001"
		const addressAaXiLqm = accounts[4]
		const addressI4gXRT = "0x0000000000000000000000000000000000000001"
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressTSsLBBI, uintodOy5jz, {from: accounts[0]});
		const uint256v2Jal8j = await XenoFelixaB6q60B.allowance.call(addressfCCZkIk, addresssjVHwrS, {from: accounts[2]});
		const stringUITjKQA = await XenoFelixaB6q60B.name.call({from: accounts[4]});
		const boolWIol3M6 = await XenoFelixaB6q60B.isPauser.call(addressBEDSQCr, {from: accounts[1]});
		const boolHqaFaZD = await XenoFelixaB6q60B.transfer.call(addressaF9fRha, uintDIuZzCt, {from: accounts[2]});
		const uint256zKBop8S = await XenoFelixaB6q60B.balanceOf.call(addressQSpX30R, {from: accounts[3]});
		const uint256okRacz0 = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addressAaXiLqm, address90ygxS, uintqV37dij, {from: accounts[2]});
//		const boolYzP9H5Y = await XenoFelixaB6q60B.unfreezeAccount.call(addressI4gXRT, {from: accounts[0]});

		assert.equal(boolHqaFaZD, true)
		assert.equal(boolWIol3M6, false)
		assert.equal(boolmtZaPli, true)
		assert.equal(stringUITjKQA, "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA")
		assert.equal(uint256okRacz0, BigInt("25294182579367350062314487020635621472586259467671361004468914377705144713216"))
		assert.equal(uint256v2Jal8j, BigInt("0"))
		assert.equal(uint256zKBop8S, BigInt("0"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addressAaXiLqm, address90ygxS, uintqV37dij, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringX0cnmzU = "NIZ5a4JcVsVllxmag"
		const stringWvjOb4g = "WIWJm4iQOdyjQOH4Ohpvloi36O5q"
		const uintGOgphZ = BigInt("500")
		const uintNm5OsnD = BigInt("185")
		const XenoFelixygTjfEC = await XenoFelix.new(stringX0cnmzU, stringWvjOb4g, uintGOgphZ, uintNm5OsnD, {from: accounts[2]});
		const uintl73KeSt = BigInt("748")
		const addresspj95TI = accounts[0]
		const uintf0FD33I = BigInt("15")
		const addressJUNdLfb = accounts[3]
		const addressvaL6bS1 = accounts[1]
		const stringilnCrBG = await XenoFelixygTjfEC.name.call({from: accounts[0]});
//		const boolqzJt1x3 = await XenoFelixygTjfEC.burnOwner.call(addresspj95TI, uintl73KeSt, {from: accounts[2]});
//		const booliyVBLaz = await XenoFelixygTjfEC.approve.call(addressJUNdLfb, uintf0FD33I, {from: accounts[3]});
//		const boolR3rhLRS = await XenoFelixygTjfEC.isPauser.call(addressvaL6bS1, {from: accounts[2]});

		assert.equal(stringilnCrBG, "NIZ5a4JcVsVllxmag")
		await expect(XenoFelixygTjfEC.burnOwner.call(addresspj95TI, uintl73KeSt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uinteOHjnio = BigInt("115")
		const uintPOiW3NS = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uinteOHjnio, uintPOiW3NS, {from: accounts[2]});
		const addressS3C6IVL = accounts[2]
		const uintWSeY44E = BigInt("1165")
		const addressEIGRR3f = "0x0000000000000000000000000000000000000002"
		const addresskEOcyO6 = accounts[6]
		const boolNPjjUt = await XenoFelixaB6q60B.isOwner.call(addressS3C6IVL, {from: accounts[3]});
		const uint8SGYnVe1 = await XenoFelixaB6q60B.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolevUULp = await XenoFelixaB6q60B.transferFrom.call(addresskEOcyO6, addressEIGRR3f, uintWSeY44E, {from: accounts[2]});

		assert.equal(boolNPjjUt, true)
		assert.equal(uint8SGYnVe1, BigInt("242"))
		await expect(XenoFelixaB6q60B.transferFrom.call(addresskEOcyO6, addressEIGRR3f, uintWSeY44E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintzB3YMCx = BigInt("115")
		const uintMvj2go = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintzB3YMCx, uintMvj2go, {from: accounts[2]});
		const addressrnTYCkV = accounts[6]
		const addresspQqIZHe = accounts[5]
		const uint256rjf95V1 = await XenoFelixaB6q60B.balanceOf.call(addressrnTYCkV, {from: accounts[0]});
//		const addressNjgW25 = await XenoFelixaB6q60B.removePauser.call(addresspQqIZHe, {from: accounts[2]});
//		const uint256AC5nVVc = await XenoFelixaB6q60B.totalSupply.call({from: accounts[4]});

		assert.equal(uint256rjf95V1, BigInt("0"))
		await expect(XenoFelixaB6q60B.removePauser.call(addresspQqIZHe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintF2nVpEt = BigInt("115")
		const uint3yGm9l = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintF2nVpEt, uint3yGm9l, {from: accounts[2]});
		const addressZe8Ipen = accounts[7]
		const uintoPfYqk = BigInt("1505")
		const addressYW3dFoi = accounts[4]
		const uint256rjf95V1 = await XenoFelixaB6q60B.balanceOf.call(addressZe8Ipen, {from: accounts[0]});
//		const booltexTMiF = await XenoFelixaB6q60B.unlock.call(addressYW3dFoi, uintoPfYqk, {from: accounts[2]});

		assert.equal(uint256rjf95V1, BigInt("0"))
		await expect(XenoFelixaB6q60B.unlock.call(addressYW3dFoi, uintoPfYqk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintjBgkY8X = BigInt("115")
		const uintNOycwee = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintjBgkY8X, uintNOycwee, {from: accounts[2]});
		const addressFoDJ8vb = accounts[5]
		const addressXNOfViV = accounts[7]
		const addressGLRxEn4 = await XenoFelixaB6q60B.transferOwnership.call(addressFoDJ8vb, {from: accounts[2]});
		const uint256rjf95V1 = await XenoFelixaB6q60B.balanceOf.call(addressXNOfViV, {from: accounts[0]});

		assert.equal(uint256rjf95V1, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const string6sPkqi = "5MJom9ZyWcnd81ow34M9lFdW7GgP6D8Kq83USvByKRSOH1cAhmiatGGFGsa8PMlDwt8QMj3OMAORw1HtfCv"
		const stringkNEdTv1 = "dVryG8aDIYrHA0RnFSLE3nB0cLLLCmcDpgBu"
		const uintYI8Yw4B = BigInt("398")
		const uintfB66n6b = BigInt("238")
		const XenoFelixlPzPnSn = await XenoFelix.new(string6sPkqi, stringkNEdTv1, uintYI8Yw4B, uintfB66n6b, {from: "0x0000000000000000000000000000000000000001"});
		const uintk2sgaPw = BigInt("328")
		const uintUwYbbcy = BigInt("383")
		const addressaCsooJO = accounts[4]
		const addressU43jE02 = accounts[2]
		const addressaBfe0Gq = accounts[4]
		await XenoFelixlPzPnSn.pause.call({from: accounts[3]});
		const boolDSc9FRn = await XenoFelixlPzPnSn.transferWithLock.call(addressaCsooJO, uintUwYbbcy, uintk2sgaPw, {from: accounts[2]});
		const uint256llc1lfs = await XenoFelixlPzPnSn.balanceOf.call(addressU43jE02, {from: accounts[2]});
		const addressxHy7O2G = await XenoFelixlPzPnSn.removePauser.call(addressaBfe0Gq, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintVogcXW = BigInt("115")
		const uintCK7xGVE = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintVogcXW, uintCK7xGVE, {from: accounts[2]});
		const addressCJyklvY = accounts[7]
		const addressaEreNbY = accounts[4]
		const uintAZgdWB = BigInt("1547")
		const uintjm7idYG = BigInt("1913")
		const addresslVrd6f = accounts[3]
		const uintjTmUDFW = BigInt("33")
		const uintqMbXr19 = BigInt("1232")
		const addressXZg02J2 = accounts[3]
		const uint256rjf95V1 = await XenoFelixaB6q60B.balanceOf.call(addressCJyklvY, {from: accounts[0]});
		const boolzwliaL6 = await XenoFelixaB6q60B.freezeAccount.call(addressaEreNbY, {from: accounts[2]});
//		const booldSXqL6 = await XenoFelixaB6q60B.transferWithLock.call(addresslVrd6f, uintjm7idYG, uintAZgdWB, {from: accounts[3]});
//		const boolVfdWiLu = await XenoFelixaB6q60B.transferWithLock.call(addressXZg02J2, uintqMbXr19, uintjTmUDFW, {from: accounts[0]});

		assert.equal(boolzwliaL6, true)
		assert.equal(uint256rjf95V1, BigInt("0"))
		await expect(XenoFelixaB6q60B.transferWithLock.call(addresslVrd6f, uintjm7idYG, uintAZgdWB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintjl0i6vI = BigInt("115")
		const uintoQTOADH = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintjl0i6vI, uintoQTOADH, {from: accounts[2]});
		const uint40v4Ey = BigInt("1682")
		const addressHASbRWW = accounts[1]
		const addressXOQKvXu = accounts[1]
		const uinttNgvgyO = BigInt("1318")
		const uintJlkQBCT = BigInt("637")
		const addresse4Gej4e = accounts[4]
		const boolmtZaPli = await XenoFelixaB6q60B.approve.call(addressHASbRWW, uint40v4Ey, {from: accounts[0]});
//		const boolX3xJIbn = await XenoFelixaB6q60B.unfreezeAccount.call(addressXOQKvXu, {from: accounts[2]});
//		const boolvBanhDE = await XenoFelixaB6q60B.lock.call(addresse4Gej4e, uintJlkQBCT, uinttNgvgyO, {from: accounts[2]});

		assert.equal(boolmtZaPli, true)
		await expect(XenoFelixaB6q60B.unfreezeAccount.call(addressXOQKvXu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringUh9ad5C = "8ATKj6MeQaij5U518n7AxTbqJb47Rvczph7zH1LFeyvSIz8UapocRIaXBJ1l42D2ezqz9qcg5uBp55gBmFp8PRgsA7SS"
		const stringggL5DRY = "Jb6p6QAjhoVgMC8huoB5AmkIwPS0JFS7943VZiKCjD6IlNo22YwhXrVhT2kc2ttMeUoqQ9aUvrPMUrH1rTCBQqdwgkhIPa"
		const uintk4Oa3GD = BigInt("1785")
		const uintQy58fNk = BigInt("174")
		const XenoFelixnMaW5AN = await XenoFelix.new(stringUh9ad5C, stringggL5DRY, uintk4Oa3GD, uintQy58fNk, {from: accounts[2]});
		const uintwHk5x3J = BigInt("342")
		const uintejzNrPA = BigInt("1899")
		const addressOjmj6km = accounts[2]
		const uintZoEZhT = BigInt("30")
		const addressk4ZHZx = accounts[3]
		const addressQxUM30 = accounts[0]
		const booluXBQmDh = await XenoFelixnMaW5AN.lock.call(addressOjmj6km, uintejzNrPA, uintwHk5x3J, {from: accounts[2]});
//		await XenoFelixnMaW5AN.onlyOwner.call({from: accounts[2]});
//		const boolY8Myh2F = await XenoFelixnMaW5AN.burnOwner.call(addressk4ZHZx, uintZoEZhT, {from: accounts[0]});
//		const addressbAVRrbv = await XenoFelixnMaW5AN.addPauser.call(addressQxUM30, {from: accounts[1]});

		assert.equal(booluXBQmDh, true)
		await expect(XenoFelixnMaW5AN.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRr9sNd0 = "AaexTfqKWbez9mKRoeEjsOEwXHWzMpS9Jv4CGlnWLEOVA"
		const stringpJYo4aK = "jqDKVTrcjSNJ3FxBVidB867giEWLKffyhKgfeeabt"
		const uintnolba9z = BigInt("115")
		const uintAkHx5dj = BigInt("242")
		const XenoFelixaB6q60B = await XenoFelix.new(stringRr9sNd0, stringpJYo4aK, uintnolba9z, uintAkHx5dj, {from: accounts[2]});
		const uintc85AfFx = BigInt("1505")
		const addressIlMaDr = accounts[4]
		const uint9KtbIi = BigInt("972")
		const addressJmF9QhW = accounts[1]
//		await XenoFelixaB6q60B.renouncePauser.call({from: accounts[2]});
//		const booltexTMiF = await XenoFelixaB6q60B.unlock.call(addressIlMaDr, uintc85AfFx, {from: accounts[2]});
//		const boolYH0U1Ku = await XenoFelixaB6q60B.decreaseAllowance.call(addressJmF9QhW, uint9KtbIi, {from: accounts[2]});

		await expect(XenoFelixaB6q60B.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})